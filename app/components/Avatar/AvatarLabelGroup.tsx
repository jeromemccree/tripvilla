import React from "react";
import classNames from "classnames";

export const Options = {
  size: {
    sm: "sm" as const,
    md: "md" as const,
    lg: "lg" as const,
    xl: "xl" as const,
  },
};
export type AvatarLabelGroupProps = {
  text: string;
  supportingText?: string;
  size: keyof typeof Options.size;
  avatar?: React.ReactNode;
};
const sizeMapping = {
  sm: { textSize: "text-sm", supportingTextSize: "text-xs", gap: "gap-2" },
  md: { textSize: "text-sm", supportingTextSize: "text-sm", gap: "gap-3" },
  lg: { textSize: "text-md", supportingTextSize: "text-md", gap: "gap-3" },
  xl: { textSize: "text-lg", supportingTextSize: "text-md", gap: "gap-4" },
};

const AvatarLabelGroup: React.FC<AvatarLabelGroupProps> = ({
  avatar,
  text,
  supportingText,
  size,
}) => {
  const { textSize, supportingTextSize, gap } = sizeMapping[size];

  return (
    <div className={classNames("flex flex-row items-center", gap)}>
      {avatar}
      <div className="flex flex-col text-gray-700">
        <span className={classNames("font-semibold", textSize)}>{text}</span>
        <span className={supportingTextSize}>{supportingText}</span>
      </div>
    </div>
  );
};
export default AvatarLabelGroup;
