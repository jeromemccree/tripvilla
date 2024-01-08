import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useMobleSidebarModal } from "../../Hooks/useOpenClose";
import Button from "../Button";
import { General } from "untitledui-js";
import Logo from "../Logo";
import AvatarLabelGroup from "../Avatar/AvatarLabelGroup";

const MobileSidebarModal: React.FC = () => {
  const { data: sessionData } = useSession();
  const mobleSidebarModal = useMobleSidebarModal();

  return (
    <>
      <Transition.Root show={mobleSidebarModal.isOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden relative z-50" onClose={mobleSidebarModal.setClose}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="" onClick={mobleSidebarModal.setClose}>
                      <General.XClose />
                    </button>
                  </div>
                </Transition.Child>

                <nav className="flex w-full max-w-xs flex-col justify-between  bg-white">
                  <Logo />
                  {sessionData ? (
                    <div className="flex flex-row  justify-between">
                      <AvatarLabelGroup
                        size="md"
                        text={sessionData.user.name || ""}
                        supportingText={sessionData.user.email || ""}
                        src={sessionData.user.image || ""}
                      />
                      <Button
                        variant="iconOnly"
                        hierarchy="tertiary_gray"
                        size="sm"
                        leadingIcon={<General.Logout01 />}
                        className=""
                        onClick={() => void signOut()}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="default"
                        hierarchy="secondary_gray"
                        size="lg"
                        text="Sign In"
                        className="w-full"
                        onClick={() => void signIn()}
                      />

                      <Button
                        variant="default"
                        hierarchy="primary"
                        size="lg"
                        text="Log In"
                        className="w-full"
                        onClick={() => void signIn()}
                      />
                    </div>
                  )}
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MobileSidebarModal;
