import { type Meta, type StoryObj } from "@storybook/react";
import {
  useMobileSidebarModal,
  useSearchModal,
  useRegisterModal,
  useCheckEmailModal,
  useCompleteProfileModal,
  useCropImageModal,
} from "@/app/hooks/useOpenClose";

const meta: Meta = {
  title: "components/Modal",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Define a new component
interface ComponentProps {
  useModalHook: () => { setOpen: () => void };
}

const ModalButton: React.FC<ComponentProps> = ({ useModalHook }) => {
  const { setOpen } = useModalHook();
  return (
    <>
      <button className="border bg-red-400 text-lg" onClick={setOpen}>
        Open Modal
      </button>
    </>
  );
};

export const MobileSidebar: Story = {
  render: () => {
    return (
      <div>
        <ModalButton useModalHook={useMobileSidebarModal} />
      </div>
    );
  },
};

export const Register: Story = {
  render: () => {
    return (
      <div>
        <ModalButton useModalHook={useRegisterModal} />
      </div>
    );
  },
};
export const CheckEmail: Story = {
  render: () => {
    return (
      <div>
        <ModalButton useModalHook={useCheckEmailModal} />
      </div>
    );
  },
};
export const Search: Story = {
  render: () => {
    return (
      <div>
        <ModalButton useModalHook={useSearchModal} />
      </div>
    );
  },
};
export const CompleteProfile: Story = {
  render: () => {
    return (
      <div>
        <ModalButton useModalHook={useCompleteProfileModal} />
      </div>
    );
  },
};
export const CropImage: Story = {
  render: () => {
    return (
      <div>
        <ModalButton useModalHook={useCropImageModal} />
      </div>
    );
  },
};
