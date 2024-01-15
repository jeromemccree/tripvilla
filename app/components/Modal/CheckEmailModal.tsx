"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import FeaturedIcon from "@/app/components/FeaturedIcon";
import { Communication } from "untitledui-js";
import Button from "@/app/components/Button";
import { useCheckEmailModal } from "@/app/hooks/useOpenClose";

import Modal from "@/app/components/modal/Modal";

const CheckEmailModal: React.FC = () => {
  const checkEmailModal = useCheckEmailModal();

  const renderContent = () => (
    <div className="flex flex-row  gap-4 ">
      <FeaturedIcon size="lg" color="brand" icon={<Communication.Mail01 />} />
      <div className="flex flex-col gap-1 text-start">
        <Dialog.Title as="h3" className="text-lg font-semibold leading-7 text-gray-900">
          Please check your
        </Dialog.Title>
        <Dialog.Description className="text-sm text-gray-600">
          We just sent a verfication email, please check it
        </Dialog.Description>
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
          text="Resend"
          onClick={checkEmailModal.setClose}
        />
        <Button
          variant="default"
          hierarchy="primary"
          size="lg"
          text="Continue"
          onClick={checkEmailModal.setClose}
        />
      </div>
    </div>
  );
  return (
    <>
      <Modal
        className="max-w-xl"
        modal={checkEmailModal}
        content={renderContent()}
        actions={renderActions()}
      />
    </>
  );
};

export default CheckEmailModal;
