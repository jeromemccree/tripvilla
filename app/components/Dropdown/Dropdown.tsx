import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
type DropdownItem = {
  text: string;
  icon?: React.ReactNode;
  href: string;
  dividerBelow?: boolean;
};
export type DropdownProps = {
  button: React.ReactNode;
  header: React.ReactNode;
  dropdownItems: DropdownItem[];
};

const Dropdown: React.FC<DropdownProps> = ({ button, header, dropdownItems }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>{button}</Menu.Button>
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
          <div className="px-4 py-3">{header}</div>
          <div className="py-1">
            {dropdownItems.map((item, index) => (
              <Menu.Item key={index}>
                <>
                  <Link
                    href={item.href}
                    className="flex flex-row items-center gap-2 px-4 py-2  hover:bg-gray-50 hover:text-gray-800"
                  >
                    {item.icon
                      ? React.cloneElement(item.icon as React.ReactElement, {
                          className: "stoke-2 stroke-current h-4",
                        })
                      : null}
                    <span className="font-medium"> {item.text}</span>
                  </Link>
                  {item.dividerBelow ? <hr className="bg-gray-200" /> : null}
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
