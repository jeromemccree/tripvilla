import { type Meta, type StoryObj } from "@storybook/react";
import Modal from "@/app/components/modal/Modal";
import { useModal } from "@/app/hooks/useOpenClose";

const meta: Meta<typeof Modal> = {
  title: "components/modal/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
// Define a new component
const Component: React.FC = () => {
  const modal = useModal();

  return (
    <>
      <button className="bg-red-400 text-lg" onClick={modal.setOpen}>
        Open Modal
      </button>
    </>
  );
};
export const Popup: Story = {
  render: () => {
    return (
      <div>
        <Component />
      </div>
    );
  },
};
