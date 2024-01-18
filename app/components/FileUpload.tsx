import React, { useRef } from "react";
import FeaturedIcon from "@/app/components/FeaturedIcon";
import { General } from "untitledui-js";
import classNames from "classnames";
import Button from "@/app/components/Button";

interface FileUploadProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange, className }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <>
      <div className="relative hidden h-fit bg-red-500 mobile:block">
        <Button
          variant="default"
          hierarchy="secondary_gray"
          size="md"
          text="Upload Photo"
          leadingIcon={<General.UploadCloud02 />}
          onClick={handleButtonClick}
        />
        <input
          ref={fileInputRef}
          id="file-upload"
          name="file-upload"
          type="file"
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={onChange}
        />
      </div>
      <div
        className={classNames(
          className,
          "relative flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 px-6 py-4 mobile:hidden",
        )}
      >
        <FeaturedIcon size="md" color="gray" theme="modern" icon={<General.UploadCloud02 />} />
        <div className="flex flex-row gap-1 pt-3 text-sm">
          <p className="font-semibold text-brand-700">Click to upload</p>
          <p className="text-gray-600">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default FileUpload;
