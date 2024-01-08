import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { General, Arrow } from "untitledui-js";
import { Avatar } from "../Avatar/Avatar";
import AvatarLabelGroup from "../Avatar/AvatarLabelGroup";
import Button from "../Button";
import Link from "next/link";

export const Options = {
  buttonType: {
    button: "button" as const,
    avatar: "avatar" as const,
    dots: "dots" as const,
  },
  headerType: {
    avatar: "avatar" as const,
    header: "header" as const,
  },
};

type DropdownItem = {
  text: string;
  icon?: React.ReactNode;
  href: string;
  hasDivider?: boolean;
};
export type DropdownProps = {
  buttonType: keyof typeof Options.buttonType;
  avatarSrc?: string;
  buttonText?: string;
  headerType: keyof typeof Options.headerType;
  headerSrc?: string;
  headerText?: string;
  headerSupportingText?: string;
  dropdownItems: DropdownItem[];
};

const Dropdown: React.FC<DropdownProps> = ({
  buttonType,
  avatarSrc,
  buttonText,
  headerType,
  headerSrc,
  headerText,
  headerSupportingText,
  dropdownItems,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          {buttonType === Options.buttonType.avatar && <Avatar src={avatarSrc} size="md" />}
          {buttonType === Options.buttonType.button && (
            <Button
              hierarchy="secondary_gray"
              text={buttonText}
              trailingIcon={<Arrow.ChevronDown />}
              variant="default"
              size="md"
              onClick={() => {}}
            />
          )}
          {buttonType === Options.buttonType.dots && <General.DotsVertical />}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-60 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-lg focus:outline-none">
          <div className="px-4 py-3">
            {headerType === Options.headerType.avatar && (
              <AvatarLabelGroup
                src={headerSrc}
                text={headerText || ""}
                supportingText={headerSupportingText}
                size="md"
              />
            )}
            {headerType === Options.headerType.header && (
              <span className=" font-semibold ">{headerText}</span>
            )}
          </div>
          <div className="py-1">
            {dropdownItems.map((item, index) => (
              <Menu.Item key={index}>
                <>
                  <Link
                    href={item.href}
                    className="flex flex-row items-center gap-2 px-4 py-2  hover:bg-gray-50 hover:text-gray-800"
                  >
                    {item.icon &&
                      React.cloneElement(item.icon as React.ReactElement, {
                        className: `stoke-2 stroke-current h-4`,
                      })}
                    <span className="font-medium"> {item.text}</span>
                  </Link>
                  {item.hasDivider && <hr className="bg-gray-200" />}
                </>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
