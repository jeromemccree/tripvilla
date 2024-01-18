"use client";
import React, { useRef } from "react";
import { Dialog } from "@headlessui/react";
import FeaturedIcon from "@/app/components/FeaturedIcon";
import Button from "@/app/components/Button";
import { useCropImageModal } from "@/app/hooks/useOpenClose";
import Modal from "@/app/components/modal/Modal";
import { useImageSelect } from "@/app/hooks/useImageSelect";
import { Editor } from "untitledui-js";
import Cropper, { type ReactCropperElement } from "react-cropper";
import { useCompleteProfileModal } from "@/app/hooks/useOpenClose";

import "cropperjs/dist/cropper.css";

const CropImageModal: React.FC = () => {
  const cropImageModal = useCropImageModal();
  const completeProfileModal = useCompleteProfileModal();
  const { image, setImage, aspectRatio } = useImageSelect();
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleSubmit = () => {
    const cropper = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
    setImage(cropper as string);
    completeProfileModal.setOpen();
    cropImageModal.setClose();
  };

  const renderContent = () => (
    <>
      <div className="flex flex-row  gap-4 mobile:flex-col mobile:gap-3">
        <FeaturedIcon size="lg" color="brand" icon={<Editor.Crop01 />} />
        <div className="flex flex-col gap-1 text-start">
          <Dialog.Title as="h3" className="text-lg font-semibold leading-7 text-gray-900">
            Crop Image
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-600">
            Upload your image
          </Dialog.Description>
        </div>
      </div>
      <Cropper
        src={image as string}
        style={{ height: 400, width: "100%" }}
        // Cropper.js options
        aspectRatio={aspectRatio}
        guides={true}
        ref={cropperRef}
      />
    </>
  );

  const renderActions = () => (
    <div className={"flex w-full justify-end"}>
      <div className="flex flex-row gap-2 mobile:w-full mobile:flex-col-reverse">
        <Button
          variant="default"
          hierarchy="secondary_gray"
          size="lg"
          text="Cancel"
          className="mobile:w-full"
          onClick={cropImageModal.setClose}
        />
        <Button
          variant="default"
          hierarchy="primary"
          size="lg"
          text="Save Changes"
          className="mobile:w-full"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
  return (
    <>
      <Modal
        className="max-w-xl"
        modal={cropImageModal}
        content={renderContent()}
        actions={renderActions()}
      />
    </>
  );
};

export default CropImageModal;
