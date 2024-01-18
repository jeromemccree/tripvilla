import { type Meta, type StoryObj } from "@storybook/react";
import {
  useMobileSidebarModal,
  useSearchModal,
  useRegisterModal,
  useCheckEmailModal,
  useCompleteProfileModal,
  useCropImageModal,
} from "@/app/hooks/useOpenClose";
import { useImageSelect } from "@/app/hooks/useImageSelect";

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
    const SelectImage = () => {
      const { image, setImage } = useImageSelect();
      const uploadedImage =
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg";
      const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        setImage(uploadedImage);
      };
      return (
        <>
          <img src={image as string} className="h-10 w-10 " />
          <button className="border bg-blue-400 text-lg" onClick={handleClick}>
            set State
          </button>
        </>
      );
    };
    return (
      <div>
        <SelectImage />
        <ModalButton useModalHook={useCropImageModal} />
      </div>
    );
  },
};
