import { type Meta, type StoryObj } from "@storybook/react";
import { Avatar, Options } from "@/app/components/avatar/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar/Avatar",

  component: Avatar,
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
    placeholder: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    src: "https://uploads-ssl.webflow.com/6347555397396612873ca575/63475553973966b4423ca5d6_Avatar%20Image%206.png",
    placeholder: true,
    onClick: () => alert("Avatar clicked story"),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const XSmall: Story = {
  args: {
    size: Options.size.xs,
  },
};

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

// export const XXLarge: Story = {
//   args: {
//     size: Options.size["2xl"],
//   },
// };
// export const ProfileSmall: Story = {
//   args: {
//     size: Options.size.profileSm,
//   },
// };

// export const ProfileMedium: Story = {
//   args: {
//     size: Options.size.profileMd,
//   },
// };

// export const ProfileLarge: Story = {
//   args: {
//     size: Options.size.profileLg,
//   },
// };
