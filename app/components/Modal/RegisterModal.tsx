"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { Communication } from "untitledui-js";
import Button from "@/app/components/Button";
import { useRegisterModal } from "@/app/hooks/useOpenClose";
import Modal from "@/app/components/modal/Modal";
import Logo from "../Logo";
import { InputField } from "@/app/components/Input";
import { z } from "zod";
import { useState } from "react";
import { useCheckEmailModal } from "@/app/hooks/useOpenClose";
import { signIn } from "next-auth/react";
import { useEmailSelect } from "@/app/hooks/useEmailSelect";

const RegisterModal: React.FC = () => {
  const registerModal = useRegisterModal();
  const checkEmailModal = useCheckEmailModal();
  const [apiError, setApiError] = useState(false);
  const { email, setEmail } = useEmailSelect();

  //   const [apiError, setApiError] = useState(false);

  type InputErrorsType = {
    email?: string[];
  };
  const [inputErrors, setInputErrors] = useState<InputErrorsType | null>(null);
  const formSchema = z.object({
    email: z.string().email("Invalid email address"),
  });

  const handleSubmit = async () => {
    const form = {
      email,
    };

    const formSchemaResults = formSchema.safeParse(form);
    if (!formSchemaResults.success) {
      setInputErrors(formSchemaResults.error.formErrors.fieldErrors);
      return;
    } else {
      setInputErrors(null);
    }

    try {
      await signIn("email", { email, redirect: false });
      checkEmailModal.setOpen;
      registerModal.setClose;
      setApiError(false);
    } catch (error) {
      setApiError(true);
    }
  };
  const renderContent = () => (
    <div className="flex flex-col items-center">
      <Logo />
      <div className="flex w-full flex-col gap-1 py-4 text-center">
        <Dialog.Title as="h3" className="text-lg font-semibold leading-7 text-gray-900">
          Log in or Sign Up
        </Dialog.Title>
        <Dialog.Description className="text-sm text-gray-600">
          {" "}
          Welcome to Tripvilla
        </Dialog.Description>
      </div>
      <InputField
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Communication.Mail01 />}
        isDestructive={inputErrors?.email !== undefined}
        hint={inputErrors?.email?.toString()}
      />{" "}
    </div>
  );

  const renderActions = () => (
    <>
      <Button
        variant="default"
        hierarchy="primary"
        size="lg"
        text="Continue"
        className="w-full"
        //   onClick={registerModal.setClose}

        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleSubmit}
      />

      {apiError ? (
        <p className="pt-2 text-sm text-error-500">
          Oops something went wrong, please try again later
        </p>
      ) : null}
    </>
  );

  return (
    <>
      <Modal
        className="max-w-md"
        modal={registerModal}
        content={renderContent()}
        actions={renderActions()}
      />
    </>
  );
};

export default RegisterModal;
