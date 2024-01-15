import { type Meta, type StoryObj } from "@storybook/react";
import RegisterModal from "@/app/components/modal/RegisterModal";
import { useRegisterModal } from "@/app/hooks/useOpenClose";

const meta: Meta<typeof RegisterModal> = {
  title: "Components/Modal/RegisterModal",
  component: RegisterModal,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
// Define a new component
const Component: React.FC = () => {
  const registerModal = useRegisterModal();

  return (
    <>
      <button className="bg-red-400 text-lg" onClick={registerModal.setOpen}>
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
