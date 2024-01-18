"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import Button from "@/app/components/Button";
import { useCompleteProfileModal, useCropImageModal } from "@/app/hooks/useOpenClose";
import Modal from "@/app/components/modal/Modal";
import { InputField } from "@/app/components/Input";
import { z } from "zod";
import { useState } from "react";
import { Users } from "untitledui-js";
import { Avatar } from "@/app/components/avatar/Avatar";
import { useImageSelect } from "@/app/hooks/useImageSelect";
import FileUpload from "../FileUpload";

const CompleteProfileModal: React.FC = () => {
  const [name, setName] = useState("");
  const completeProfileModal = useCompleteProfileModal();
  const cropImageModal = useCropImageModal();
  const [apiError, setApiError] = useState(false);
  const { image, setImage, setAspectRatio } = useImageSelect();

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

  const handleImageSelect = (inputImage: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(inputImage);
    cropImageModal.setOpen();
    completeProfileModal.setClose();
  };

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
      // checkEmailModal.setOpen;
      // completeProfileModal.setClose;
      setApiError(false);
      setName("");
    } catch (error) {
      setApiError(true);
    }
  };
  const renderContent = () => (
    <div className="space-y-4">
      <div className="w-full space-y-1">
        <Dialog.Title as="h3" className="text-lg font-semibold leading-7 text-gray-900">
          Complete your profile{" "}
        </Dialog.Title>
        <Dialog.Description className="text-sm text-gray-600">
          {" "}
          Choose a name and profile pic
        </Dialog.Description>
      </div>
      <div className="space-y-4">
        <div className="flex h-fit w-full flex-row items-center gap-5">
          <Avatar size="profileMd" className="self-center" src={image} />
          <FileUpload
            className="self-center"
            onChange={(e) => handleImageSelect(e.target.files[0] as File)}
          />
        </div>
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
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
