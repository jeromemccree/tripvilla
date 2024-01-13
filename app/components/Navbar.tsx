"use client";
import React from "react";
import Logo from "./Logo";
import Dropdown from "./dropdown/Dropdown";
import { Communication, General } from "untitledui-js";
import { useSession, signIn } from "next-auth/react";
import Button from "@/app/components/Button";
import { useSearchModal } from "@/app/hooks/useOpenClose";
import { useMobleSidebarModal } from "@/app/hooks/useOpenClose";
import { Avatar } from "@/app/components/avatar/Avatar";
import AvatarLabelGroup from "@/app/components/avatar/AvatarLabelGroup";

interface NavigationItem {
  icon: (className: string) => JSX.Element;
  name: string;
  path: string;
  lineAbove: boolean;
}

const Navbar: React.FC = () => {
  const { data: sessionData } = useSession();
  const searchModal = useSearchModal();
  const mobleSidebarModal = useMobleSidebarModal();

  const signedInNavigation: NavigationItem[] = [
    {
      icon: (className) => <Communication.AnnotationAlert className={className} />,
      name: "Zymir ",
      path: `mailto:vidchill@vidchill.com`,
      lineAbove: false,
    },
    {
      icon: (className) => <Communication.AnnotationAlert className={className} />,
      name: "Terms of Service",
      path: "/Blog/TOS",
      lineAbove: true,
    },

    // Your signedInNavigation items
  ];
  const signedOutNavigation: NavigationItem[] = [
    {
      icon: (className) => <Communication.AnnotationAlert className={className} />,
      name: "Feedback",
      path: `mailto:vidchill@vidchill.com`,
      lineAbove: false,
    },
    {
      icon: (className) => <Communication.AnnotationAlert className={className} />,
      name: "Terms of Service",
      path: "/Blog/TOS",
      lineAbove: true,
    },
    // Your signedOutNavigation items
  ];
  const Navigation = sessionData ? signedInNavigation : signedOutNavigation;
  return (
    <nav className="fixed z-10 flex h-16 w-full items-center justify-between border border-gray-200 bg-white p-2 pl-4 shadow-sm desktop:h-18 desktop:px-8">
      <Logo className="hidden desktop:block" />
      <button
        onClick={searchModal.setOpen}
        className="flex h-10 w-full flex-row gap-2 rounded-full border border-gray-300 p-2 pl-6 text-md text-gray-500 shadow-xs desktop:w-80"
      >
        <General.SearchMD className="stroke-current" />
        <span>search</span>
      </button>
      <div className="hidden items-center gap-3 desktop:flex">
        <Dropdown
          button={
            sessionData ? (
              <Avatar size="md" src={sessionData?.user?.image || ""} alt="avatar" />
            ) : (
              <General.DotsVertical />
            )
          }
          header={
            sessionData ? (
              <AvatarLabelGroup
                text={sessionData?.user.name || ""}
                supportingText={sessionData?.user.email || ""}
                size="md"
                avatar={<Avatar size="md" src={sessionData?.user?.image || ""} alt="avatar" />}
              />
            ) : (
              <span className="font-semibold text-gray-700">Menu</span>
            )
          }
          dropdownItems={Navigation.map((item) => ({
            text: item.name,
            icon: item.icon("icon-class-name"), // Replace 'icon-class-name' with the actual class name
            href: item.path,
            hasDivider: item.lineAbove,
          }))}
        />
        {!sessionData ? (
          <>
            <Button
              variant="default"
              hierarchy="tertiary_gray"
              size="lg"
              text="Sign In"
              onClick={() => void signIn()}
            />

            <Button
              variant="default"
              hierarchy="primary"
              size="lg"
              text="Log In"
              onClick={() => void signIn()}
            />
          </>
        ) : null}
      </div>
      <Button
        variant="iconOnly"
        hierarchy="tertiary_gray"
        size="md"
        className="desktop:hidden"
        leadingIcon={<General.Menu01 />}
        onClick={mobleSidebarModal.setOpen}
      />
    </nav>
  );
};

export default Navbar;
