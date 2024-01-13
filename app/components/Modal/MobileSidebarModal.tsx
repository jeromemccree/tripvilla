"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useMobleSidebarModal } from "@/app/hooks/useOpenClose";
import Button from "@/app/components/Button";
import { Communication, General, Alerts, Maps, Users } from "untitledui-js";
import Logo from "@/app/components/Logo";
import AvatarLabelGroup from "@/app/components/avatar/AvatarLabelGroup";
import { Avatar } from "@/app/components/avatar/Avatar";
import { useRouter, usePathname } from "next/navigation";
import classNames from "classnames";

const MobileSidebarModal: React.FC = () => {
  const mobleSidebarModal = useMobleSidebarModal();
  const { data: sessionData } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  interface NavigationItem {
    icon: JSX.Element;
    name: string;
    path: string;
    dividerBelow: boolean;
  }
  const signedInNavigation: NavigationItem[] = [
    {
      icon: <Communication.MessageTextSquare01 />,
      name: "Messages ",
      path: `/messages`,
      dividerBelow: false,
    },
    {
      icon: <Alerts.Bell01 />,
      name: "Notifications",
      path: `/notifications`,
      dividerBelow: false,
    },
    {
      icon: <General.Bookmark />,
      name: "Collections",
      path: `/collections`,
      dividerBelow: false,
    },

    {
      icon: <Maps.Route />,
      name: "Trips",
      path: `/trips`,
      dividerBelow: false,
    },
    {
      icon: <General.Home03 />,
      name: "Become a Host",
      path: `/host`,
      dividerBelow: false,
    },
  ];
  const signedOutNavigation: NavigationItem[] = [
    {
      icon: <General.Home03 />,
      name: "Become a Host",
      path: `/host`,
      dividerBelow: false,
    },
  ];
  const topNavigation = sessionData ? signedInNavigation : signedOutNavigation;
  const bottomNavigation: NavigationItem[] = [
    {
      icon: <General.Settings01 />,
      name: "Settings",
      path: `/settings`,
      dividerBelow: false,
    },
    {
      icon: <General.HelpCircle />,
      name: "Help",
      path: `/help`,
      dividerBelow: false,
    },
  ];

  const renderNavigation = (Navigation: NavigationItem[]) => {
    return (
      <div className="px-2">
        {Navigation.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.path)}
            className={classNames(
              "flex w-full flex-row gap-3 px-3 py-2",
              pathname === item.path ? " text-brand-700" : "text-gray-700",
            )}
          >
            {React.cloneElement(item.icon as React.ReactElement, {
              className: "stoke-2 stroke-current h-6",
            })}
            <span className="text-md font-semibold">{item.name}</span>
          </button>
        ))}
      </div>
    );
  };
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
                      <General.XClose className="stroke-white" />
                    </button>
                  </div>
                </Transition.Child>

                <nav className="flex w-full max-w-xs flex-col justify-between bg-white">
                  <div className="pt-4">
                    <Logo className="px-4 pb-4" />
                    {renderNavigation(topNavigation)}
                  </div>
                  <div>
                    {" "}
                    {renderNavigation(bottomNavigation)}
                    <div className="px-2 pb-6 pt-5">
                      {sessionData ? (
                        <>
                          <hr className="bg-gray-200" />
                          <div className="flex flex-row justify-between pt-3">
                            <AvatarLabelGroup
                              size="md"
                              text={sessionData.user.name || ""}
                              supportingText={sessionData.user.email || ""}
                              avatar={
                                <Avatar
                                  size="md"
                                  src={sessionData?.user?.image || ""}
                                  alt="avatar"
                                />
                              }
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
                        </>
                      ) : (
                        <div className="flex flex-col gap-3">
                          <Button
                            variant="default"
                            hierarchy="primary"
                            size="lg"
                            text="Sign Up"
                            className="w-full"
                            onClick={() => void signIn()}
                          />
                          <Button
                            variant="default"
                            hierarchy="secondary_gray"
                            size="lg"
                            text="Log In"
                            className="w-full"
                            onClick={() => void signIn()}
                          />
                        </div>
                      )}
                    </div>
                  </div>
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
