import { type Meta, type StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    buttons: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    buttons: [
      {
        text: "Text",
        isCurrent: true,
        onClick: () => alert("Button clicked story"),
      },
      {
        text: "Text",
        onClick: () => alert("Button clicked story"),

        isCurrent: false,
      },
    ],
  },
};
