import { type Meta, type StoryObj } from "@storybook/react";
import CheckEmailModal from "@/app/components/modal/CheckEmailModal";
import { useCheckEmailModal } from "@/app/hooks/useOpenClose";

const meta: Meta<typeof CheckEmailModal> = {
  title: "Components/Modal/CheckEmailModal",
  component: CheckEmailModal,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
// Define a new component
const Component: React.FC = () => {
  const checkEmailModal = useCheckEmailModal();

  return (
    <>
      <button className="bg-red-400 text-lg" onClick={checkEmailModal.setOpen}>
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
