import React from "react";
import FeaturedIcon from "@/app/components/FeaturedIcon";
import { General } from "untitledui-js";
import classNames from "classnames";

interface FileUploadProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange, className }) => {
  return (
    <>
      <div
        className={classNames(
          className,
          "relative flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 px-6 py-4",
        )}
      >
        <FeaturedIcon size="md" color="gray" theme="modern" icon={<General.UploadCloud02 />} />
        <div className="flex flex-row pt-3">
          <p className="text-sm font-semibold text-brand-700">Click to upload</p>
          <p className="pl-1 text-sm text-gray-600">or drag and drop</p>
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
