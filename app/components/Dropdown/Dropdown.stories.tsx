import React from "react";
import Dropdown, { Options } from "./Dropdown";
import { type Meta, type StoryObj } from "@storybook/react";

import { Shapes, Users, Communication } from "untitledui-js";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    buttonType: {
      control: "select",
      options: ["avatar", "button", "dots"],
    },
    avatarSrc: {
      control: "text",
    },
    buttonText: {
      control: "text",
    },
    // headerType: {
    //   control: "select",
    //   options: ["avatar", "header"],
    // },
    headerSrc: {
      control: "text",
    },
    headerText: {
      control: "text",
    },
    headerSupportingText: {
      control: "text",
    },
    dropdownItems: {
      control: "object",
    },
  },
  args: {
    // headerText="Olivia Rhye",
    // headerSupportingText="olivia@untitledui.com"
    dropdownItems: [
      { text: "Bookmarked", icon: <Shapes.Circle />, href: "#" },
      { text: "Profile", icon: <Users.User02 />, href: "#", hasDivider: true },
      { text: "Messaging", icon: <Communication.Annotation />, href: "#" },
      { text: "Profile", icon: <Shapes.Circle />, href: "#" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const dropdownOptions = [
  {
    buttonType: Options.buttonType.button,
    headerType: Options.headerType.header,
    buttonText: "Accounts",
    headerText: "Accounts Menu",
  },
  {
    buttonType: Options.buttonType.dots,
    headerType: Options.headerType.header,
    headerText: "Options Menu",
  },
];
export const DropdownTypes: Story = {
  render: (args) => (
    <div className="flex items-center gap-10">
      <Dropdown
        buttonType={Options.buttonType.avatar}
        headerType={Options.headerType.avatar}
        headerText="Olivia Rhye"
        headerSupportingText="olivia@untitledui.com"
        {...args}
      />
      <Dropdown
        buttonType={Options.buttonType.button}
        headerType={Options.headerType.header}
        buttonText="Accounts"
        headerText="Accounts Menu"
        {...args}
      />
      <Dropdown
        buttonType={Options.buttonType.dots}
        headerType={Options.headerType.header}
        headerText="Options Menu"
        {...args}
      />
    </div>
  ),
};

export const HeaderTypes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Dropdown
        buttonType={Options.buttonType.button}
        headerType={Options.headerType.header}
        headerText="Accounts Menu"
        {...args}
      />
      <Dropdown
        buttonType={Options.buttonType.button}
        headerType={Options.headerType.avatar}
        headerText="Olivia Rhye"
        headerSupportingText="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

// const dropdownOptions = [
//   {
//     buttonType: Options.buttonType.button,
//     headerType: Options.headerType.header,
//     buttonText: "Accounts",
//     headerText: "Accounts Menu",
//   },
//   {
//     buttonType: Options.buttonType.dots,
//     headerType: Options.headerType.header,
//     headerText: "Options Menu",
//   }
// ];

// return (
//   <>
//     {dropdownOptions.map((option, index) => (
//       <Dropdown
//         key={index}
//         {...option}
//         {...args}
//       />
//     ))}
//   </>
// );
