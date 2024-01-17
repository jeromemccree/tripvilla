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
import { General } from "untitledui-js";
import { useImageSelect } from "@/app/hooks/useImageSelect";

const CompleteProfileModal: React.FC = () => {
  const [name, setName] = useState("");
  const completeProfileModal = useCompleteProfileModal();
  const cropImageModal = useCropImageModal();
  const [apiError, setApiError] = useState(false);
  const { image, setImage } = useImageSelect();

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
      <div className="flex w-full flex-row content-center justify-center gap-5  pb-4">
        <Avatar size="profileMd" className="self-center" src="" />
        <div className="flex w-full justify-center rounded-lg border  border-gray-200 px-6 py-10">
          <div className="text-center">
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <div className="rounded-lg border border-gray-200 p-2.5 shadow-xs">
                <General.UploadCloud02 />
              </div>
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-brand-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={(e) => handleImageSelect(e.target.files[0])}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
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
