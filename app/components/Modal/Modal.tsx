"use client";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { General } from "untitledui-js";
import type { OpenCloseStore } from "@/app/hooks/useOpenClose";
import type { ReactNode } from "react";
import classNames from "classnames";

interface ModalProps {
  content: ReactNode;
  actions: ReactNode;
  modal: OpenCloseStore;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ content, actions, modal, className }) => {
  // useEffect(() => {
  //   if (modal.isOpen) {
  //   }
  // }, [modal.isOpen]);

  return (
    <>
      <Transition.Root show={modal.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={modal.setClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-950 bg-opacity-70 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className=" flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 translate-y-0 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-4 translate-y-0 scale-95"
              >
                <Dialog.Panel
                  className={classNames(
                    "relative w-full transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all mobile:p-4 mobile:pt-5",
                    className,
                  )}
                >
                  {" "}
                  <button
                    type="button"
                    className="absolute right-3 top-3 block p-2"
                    onClick={modal.setClose}
                  >
                    <General.XClose className="h-6 w-6 stroke-gray-400" />
                  </button>
                  {content}
                  <div className="bg-white pt-8 mobile:pt-6">{actions}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default Modal;
