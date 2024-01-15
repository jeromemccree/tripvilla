"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import FeaturedIcon from "@/app/components/FeaturedIcon";
import { General } from "untitledui-js";
import Button from "@/app/components/Button";
import { useCheckEmailModal } from "@/app/hooks/useOpenClose";

import Modal from "@/app/components/modal/Modal";

const CheckEmailModal: React.FC = () => {
  const checkEmailModal = useCheckEmailModal();

  return (
    <>
      <Modal
        modal={checkEmailModal}
        content={
          <div className="flex flex-col gap-4 ">
            <FeaturedIcon size="lg" color="success" icon={<General.CheckCircle />} />

            <div className="flex flex-col gap-1 text-start">
              <Dialog.Title as="h3" className="text-lg font-semibold leading-7 text-gray-900">
                Message was Sent{" "}
              </Dialog.Title>

              <p className="text-sm text-gray-600">
                Thank you i will get back with you as soon as possible.
              </p>
            </div>
          </div>
        }
        actions={
          <Button
            variant="default"
            hierarchy="primary"
            size="lg"
            text="Close"
            className="w-full"
            onClick={checkEmailModal.setClose}
          />
        }
      />
    </>
  );
};

export default CheckEmailModal;
