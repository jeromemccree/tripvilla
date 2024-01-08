import { type Meta, type StoryObj } from "@storybook/react";
import MobileSidebarModal from "./MobileSidebarModal";
import { useMobleSidebarModal } from "../../Hooks/useOpenClose";

const meta: Meta<typeof MobileSidebarModal> = {
  title: "Components/Modal/MobleSidebarModal",
  component: MobileSidebarModal,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
// Define a new component
const Component: React.FC = () => {
  const mobileSidebarModal = useMobleSidebarModal();
  return (
    <>
      <button className="bg-red-400 text-lg" onClick={mobileSidebarModal.setOpen}>
        Open mobileSidebarModal
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
