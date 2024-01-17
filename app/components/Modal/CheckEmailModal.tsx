"use client";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import FeaturedIcon from "@/app/components/FeaturedIcon";
import { Communication } from "untitledui-js";
import Button from "@/app/components/Button";
import { useCheckEmailModal } from "@/app/hooks/useOpenClose";
import Modal from "@/app/components/modal/Modal";
import { useEmailSelect } from "@/app/hooks/useEmailSelect";
import { signIn } from "next-auth/react";
import { useTimer } from "use-timer";

const CheckEmailModal: React.FC = () => {
  const checkEmailModal = useCheckEmailModal();
  const { email } = useEmailSelect();
  const { time, start, reset, status } = useTimer({
    initialTime: 30,
    endTime: 0,
    timerType: "DECREMENTAL",
  });
  useEffect(() => {
    start();
  }, []);

  const renderContent = () => (
    <div className="flex flex-row  gap-4 mobile:flex-col mobile:gap-3">
      <FeaturedIcon size="lg" color="brand" icon={<Communication.Mail01 />} />
      <div className="flex flex-col gap-1 text-start">
        <Dialog.Title as="h3" className="text-lg font-semibold leading-7 text-gray-900">
          Please check your
        </Dialog.Title>
        <Dialog.Description className="text-sm text-gray-600">
          We just sent a verification email, please check it.
          <br /> Resend avaliable in {time}
        </Dialog.Description>
      </div>
    </div>
  );

  const renderActions = () => (
    <div className={"flex w-full justify-end"}>
      <div className="flex flex-row gap-2 mobile:w-full mobile:flex-col-reverse">
        <Button
          variant="default"
          hierarchy="secondary_gray"
          size="lg"
          text="Resend"
          className="mobile:w-full"
          onClick={() => {
            if (status === "STOPPED") {
              // alert("resend to " + email);
              signIn("email", { email, redirect: false });
              reset();
              start();
            }
          }}
        />
        <Button
          variant="default"
          hierarchy="primary"
          size="lg"
          text="Continue"
          className="mobile:w-full"
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
