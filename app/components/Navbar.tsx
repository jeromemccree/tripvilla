"use client";
import React from "react";
import { Communication, General, Alerts, Maps, Users } from "untitledui-js";
import { useSession, signIn } from "next-auth/react";
import Button from "@/app/components/Button";
import { useSearchModal } from "@/app/hooks/useOpenClose";
import { useMobleSidebarModal } from "@/app/hooks/useOpenClose";
import { Avatar } from "@/app/components/avatar/Avatar";
import AvatarLabelGroup from "@/app/components/avatar/AvatarLabelGroup";
import Logo from "@/app/components/Logo";
import Dropdown from "@/app/components/dropdown/Dropdown";
import classNames from "classnames";

interface NavigationItem {
  icon: JSX.Element;
  name: string;
  path: string;
  dividerBelow: boolean;
}
interface NavbarProps {
  maxWidth?: string;
}

const Navbar: React.FC<NavbarProps> = ({ maxWidth }) => {
  const { data: sessionData } = useSession();
  const searchModal = useSearchModal();
  const mobleSidebarModal = useMobleSidebarModal();

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
      icon: <General.Settings01 />,
      name: "Settings",
      path: `/settings`,
      dividerBelow: false,
    },
    {
      icon: <Maps.Route />,
      name: "Trips",
      path: `/trips`,
      dividerBelow: false,
    },
    {
      icon: <Users.User01 />,
      name: "View your profile",
      path: `/ViewProfile`,
      dividerBelow: false,
    },

    {
      icon: <General.Home03 />,
      name: "Become a Host",
      path: `/host`,
      dividerBelow: false,
    },
    {
      icon: <General.HelpCircle />,
      name: "Help",
      path: `/help`,
      dividerBelow: false,
    },
    {
      icon: <General.Logout01 />,
      name: "Log Out",
      path: `/api/auth/signout`,
      dividerBelow: true,
    },
  ];
  const signedOutNavigation: NavigationItem[] = [
    {
      icon: <General.Home03 />,
      name: "Become a Host",
      path: `/host`,
      dividerBelow: false,
    },
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
  const Navigation = sessionData ? signedInNavigation : signedOutNavigation;
  return (
    <nav className="fixed z-10 flex h-16 w-full justify-center border border-gray-200  bg-white p-2 shadow-sm desktop:h-18 desktop:px-8">
      <div className={classNames("flex w-full items-center justify-between ", maxWidth)}>
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
              icon: item.icon, // Replace 'icon-class-name' with the actual class name
              href: item.path,
              hasDivider: item.dividerBelow,
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
      </div>
    </nav>
  );
};

export default Navbar;
