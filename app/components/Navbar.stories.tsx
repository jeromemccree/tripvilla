import { type Meta, type StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
// import RootLayout from "../layout";
import SearchModal from "./Modal/SearchModal";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  //   argTypes: {
  //     buttons: {
  //       control: "object",
  //     },
  //   },
};
export default meta;

type Story = StoryObj<typeof meta>;

const Component: React.FC = () => {
  return (
    <>
      <SearchModal />
      <Navbar />
    </>
  );
};
export const Basic: Story = {
  render: () => {
    return (
      <>
        <Component />
      </>
    );
  },
};
