import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import FeaturedIcon, { Options } from "./FeaturedIcon";
import { Shapes, Editor } from "untitledui-js";

const meta: Meta<typeof FeaturedIcon> = {
  title: "Components/FeaturedIcon",
  component: FeaturedIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "select",
      options: Options.size,
    },
    color: {
      control: "select",
      options: Options.color,
    },
    icon: {
      control: "select",
      options: ["None", "Icon"],
      mapping: {
        None: null,
        Icon: <Shapes.Circle />,
      },
    },
  },
  args: {
    color: Options.color.brand,
    size: Options.size.md,
    icon: <Editor.CodeSnippet02 />,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
const colors = Object.keys(Options.color);
const sizes = Object.keys(Options.size);

export const Color: Story = {
  render: (args) => (
    <>
      <div className="flex items-center gap-3">
        {colors.map((color, index) => (
          <FeaturedIcon
            key={index}
            icon={args.icon}
            size={args.size}
            color={color}
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
        {sizes.map((size, index) => (
          <FeaturedIcon
            key={index}
            icon={args.icon}
            size={size}
            color={args.color}
          />
        ))}
      </div>
    </>
  ),
};
