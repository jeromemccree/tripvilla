import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import Button, { Options } from "./Button";
import { Shapes } from "untitledui-js";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    hierarchy: {
      control: "select",
      options: Options.hierarchy,
    },
    size: {
      control: "select",
      options: Options.size,
    },
    variant: {
      control: "select",
      options: Options.variant,
    },
    text: {
      control: "text",
    },
    leadingIcon: {
      control: "select",
      options: ["None", "Icon"],
      mapping: {
        None: null,
        Icon: <Shapes.Circle />,
      },
    },
    trailingIcon: {
      control: "select",
      options: ["None", "Icon"],
      mapping: {
        None: null,
        Icon: <Shapes.Circle />,
      },
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    hierarchy: Options.hierarchy["primary"],
    size: Options.size["md"],
    text: "Button",
    variant: Options.variant["default"],
    leadingIcon: <Shapes.Circle />,
    trailingIcon: <Shapes.Circle />,
    onClick: () => alert("Button clicked story"),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Define an array of button configurations
const hierarchies = Object.keys(Options.hierarchy);
const sizes = Object.keys(Options.size);

export const Hierarchy: Story = {
  render: (args) => (
    <>
      <div className="flex items-center gap-3">
        {hierarchies.map((hierarchy, index) => (
          <Button
            key={index}
            hierarchy={hierarchy}
            size={args.size}
            text={args.text}
            variant={args.variant}
            leadingIcon={args.leadingIcon}
            onClick={args.onClick}
          />
        ))}
      </div>
    </>
  ),
};
export const Size: Story = {
  render: (args) => (
    <>
      <div className="flex items-center gap-3">
        {" "}
        {sizes.map((size, index) => (
          <Button
            key={index}
            hierarchy={args.hierarchy}
            size={size}
            text={args.text}
            variant={args.variant}
            onClick={args.onClick}
          />
        ))}
      </div>
    </>
  ),
};
