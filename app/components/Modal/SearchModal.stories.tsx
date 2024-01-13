import { type Meta, type StoryObj } from "@storybook/react";
import SearchModal from "./SearchModal";
import { useSearchModal } from "../../hooks/useOpenClose";

const meta: Meta<typeof SearchModal> = {
  title: "Components/Modal/SearchModal",
  component: SearchModal,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
// Define a new component
const Component: React.FC = () => {
  const searchModal = useSearchModal();

  return (
    <>
      <button className="bg-red-400 text-lg" onClick={searchModal.setOpen}>
        Open Modal
      </button>
    </>
  );
};
export const Modal: Story = {
  render: () => {
    return (
      <div>
        <Component />
      </div>
    );
  },
};
