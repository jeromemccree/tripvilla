import { type Meta, type StoryObj } from "@storybook/react";
import AvatarLabelGroup, { Options } from "./AvatarLabelGroup";

const meta: Meta<typeof AvatarLabelGroup> = {
  title: "Components/Avatar/AvatarLabelGroup",
  component: AvatarLabelGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: Options.size,
      },
    },
  },
  args: {
    src: "https://uploads-ssl.webflow.com/6347555397396612873ca575/63475553973966b4423ca5d6_Avatar%20Image%206.png",
    text: "Olivia Rhye",
    supportingText: "olivia@untitledui.com",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: Options.size.sm,
  },
};

export const Medium: Story = {
  args: {
    size: Options.size.md,
  },
};

export const Large: Story = {
  args: {
    size: Options.size.lg,
  },
};

export const XLarge: Story = {
  args: {
    size: Options.size.xl,
  },
};
