import React, { ReactElement } from "react";
import classNames from "classnames";

export const Options = {
  size: {
    xs: "xs" as const,
    sm: "sm" as const,
    md: "md" as const,
    lg: "lg" as const,
    xl: "xl" as const,
  },
  color: {
    brand: "brand" as const,
    gray: "gray" as const,
    error: "error" as const,
    warning: "warning" as const,
    success: "success" as const,
  },
};
export type FeaturedIconProps = {
  icon: ReactElement;
  size: keyof typeof Options.size;
  color: keyof typeof Options.color;
};

const FeaturedIcon: React.FC<FeaturedIconProps> = ({ icon, size, color }) => {
  const sizeClasses = {
    xs: { size: "h-3 w-3", margin: "m-1.5" },
    sm: { size: "h-4 w-4", margin: "m-2" },
    md: { size: "h-5 w-5", margin: "m-2.5" },
    lg: { size: "h-6 w-6", margin: "m-3" },
    xl: { size: "h-7 w-7", margin: "m-3.5" },
  };
  const colorClasses = {
    brand: {
      stroke: "stroke-brand-600",
      bg: "bg-brand-100",
      border: "border-brand-50",
    },
    gray: {
      stroke: "stroke-gray-600",
      bg: "bg-gray-100",
      border: "border-gray-50",
    },
    error: {
      stroke: "stroke-error-600",
      bg: "bg-error-100",
      border: "border-error-50",
    },
    warning: {
      stroke: "stroke-warning-600",
      bg: "bg-warning-100",
      border: "border-warning-50",
    },
    success: {
      stroke: "stroke-success-600",
      bg: "bg-success-100",
      border: "border-success-50",
    },
  };
  return (
    <div
      className={classNames(
        "flex h-fit w-fit flex-shrink-0 items-center justify-center rounded-full border-8",
        colorClasses[color].border,
        colorClasses[color].bg
      )}
    >
      {React.cloneElement(icon, {
        className: classNames(
          "shrink-0",
          colorClasses[color].stroke,
          sizeClasses[size].size,
          sizeClasses[size].margin
        ),
      })}
    </div>
  );
};
export default FeaturedIcon;
