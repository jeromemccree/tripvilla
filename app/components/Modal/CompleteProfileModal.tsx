"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import Button from "@/app/components/Button";
import { useCompleteProfileModal } from "@/app/hooks/useOpenClose";
import Modal from "@/app/components/modal/Modal";
import { InputField } from "@/app/components/Input";
import { z } from "zod";
import { useState } from "react";
import { Users } from "untitledui-js";
import { Avatar } from "@/app/components/avatar/Avatar";

const CompleteProfileModal: React.FC = () => {
  const [name, setName] = useState("");
  const completeProfileModal = useCompleteProfileModal();
  const [apiError, setApiError] = useState(false);

  type InputErrorsType = {
    name?: string[];
  };
  const [inputErrors, setInputErrors] = useState<InputErrorsType | null>(null);
  const formSchema = z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(2, { message: "Must be 2 or more characters long" }),
  });

  const handleSubmit = async () => {
    const form = {
      name,
    };
    const formSchemaResults = formSchema.safeParse(form);
    if (!formSchemaResults.success) {
      setInputErrors(formSchemaResults.error.formErrors.fieldErrors);
      return;
    } else {
      setInputErrors(null);
    }

    try {
      // await signIn("name", { name, redirect: false });
      // checkEmailModal.setOpen();
      // completeProfileModal.setClose();
      setApiError(false);
      setName("");
    } catch (error) {
      setApiError(true);
    }
  };
  const renderContent = () => (
    <div className="">
      <div className="flex w-full flex-col gap-1 pb-4">
        <Dialog.Title as="h3" className="text-lg font-semibold leading-7 text-gray-900">
          Complete your profile{" "}
        </Dialog.Title>
        <Dialog.Description className="text-sm text-gray-600">
          {" "}
          Choose a name and profile pic
        </Dialog.Description>
      </div>
      <Avatar size="2xl" src="" />

      





      <InputField
        id="name"
        name="name"
        type="name"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        icon={<Users.User01 />}
        isDestructive={inputErrors?.name !== undefined}
        hint={inputErrors?.name?.toString()}
      />{" "}
    </div>
  );

  const renderActions = () => (
    <div className={"flex w-full justify-end"}>
      <div className="flex flex-row gap-2">
        <Button
          variant="default"
          hierarchy="secondary_gray"
          size="lg"
          text="Skip"
          onClick={completeProfileModal.setClose}
        />
        <Button
          variant="default"
          hierarchy="primary"
          size="lg"
          text="Complete"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );

  return (
    <>
      <Modal
        className="max-w-md"
        modal={completeProfileModal}
        content={renderContent()}
        actions={renderActions()}
      />
    </>
  );
};

export default CompleteProfileModal;