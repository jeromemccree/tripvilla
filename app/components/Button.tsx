"use client";

import React from "react";
import { type ReactElement } from "react";

export const Options = {
  hierarchy: {
    primary: "primary" as const,
    secondary_gray: "secondary_gray" as const,
    secondary_color: "secondary_color" as const,
    tertiary_gray: "tertiary_gray" as const,
    tertiary_color: "tertiary_color" as const,
    link_gray: "link_gray" as const,
    link_color: "link_color" as const,
  },
  size: {
    sm: "sm" as const,
    md: "md" as const,
    lg: "lg" as const,
    xl: "xl" as const,
    "2xl": "2xl" as const,
  },
  variant: {
    default: "default" as const,
    iconOnly: "iconOnly" as const,
  },
};

export type ButtonProps = {
  hierarchy: keyof typeof Options.hierarchy;
  size: keyof typeof Options.size;
  variant: keyof typeof Options.variant;
  className?: string;
  text?: string;
  disabled?: boolean;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  hierarchy,
  size,
  text,
  disabled,
  leadingIcon,
  trailingIcon,
  variant,
  className,
  onClick,
}) => {
  const hierarchyClasses: {
    [key: string]: {
      button: string;
      padding?: string;
    };
  } = {
    primary: {
      button:
        "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 focus:ring-opacity-25",
    },
    secondary_gray: {
      button:
        " bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-800 focus:ring-gray-300 focus:ring-opacity-25",
    },
    secondary_color: {
      button:
        "bg-white text-brand-700 border border-brand-300 hover:bg-brand-50  hover:text-brand-800 focus:ring-brand-500 focus:ring-opacity-25",
    },
    tertiary_gray: {
      button: "text-gray-600 hover:bg-gray-50 hover:text-gray-700 focus:ring-transparent",
    },
    tertiary_color: {
      button:
        "bg-white text-brand-700 hover:bg-brand-50 hover:text-brand-800  focus:ring-transparent",
    },
    link_gray: {
      button: "text-gray-600 hover:bg-gray-50 hover:text-gray-700 focus:ring-transparent",
      padding: "p-0", // optional padding
    },
    link_color: {
      button: "text-brand-700 hover:bg-brand-50 hover:text-brand-800  focus:ring-transparent",
      padding: "p-0 ", // optional padding
    },
  };
  const buttonStyles = {
    sm: {
      default: { padding: "px-3 py-2", gap: "gap-1", iconSize: "h-5" },
      iconOnly: { padding: "p-2", iconSize: "h-5", gap: "" },
    },
    md: {
      default: { padding: "px-3.5 py-2.5", gap: "gap-1", iconSize: "h-5" },
      iconOnly: { padding: "p-2.5", iconSize: "h-5", gap: "" },
    },
    lg: {
      default: { padding: "px-4 py-2.5", gap: "gap-1.5", iconSize: "h-5" },
      iconOnly: { padding: "p-3", iconSize: "h-5", gap: "" },
    },
    xl: {
      default: { padding: "px-4.5 py-3", gap: "gap-1.5", iconSize: "h-5" },
      iconOnly: { padding: "p-3.5", iconSize: "h-5", gap: "" },
    },
    "2xl": {
      default: { padding: "px-5.5 py-4", gap: "gap-1.5", iconSize: "h-6" },
      iconOnly: { padding: "p-4", iconSize: "h-5", gap: "" },
    },
  };
  const baseButtonClasses =
    "inline-flex rounded-md items-center justify-center font-semibold shadow-xs focus:ring shrink-0";
  const buttonClasses = `${baseButtonClasses} ${className} ${
    hierarchyClasses[hierarchy]?.padding || buttonStyles[size][variant].padding
  } ${buttonStyles[size][variant].gap} ${hierarchyClasses[hierarchy]?.button}`;
  const renderIcon = (icon: ReactElement | undefined) => {
    return icon
      ? React.cloneElement(icon, {
          className: `stoke-2 stroke-current ${buttonStyles[size][variant].iconSize}`,
        })
      : null;
  };
  const isIconOnly = variant === "iconOnly";
  return (
    <button type="button" className={buttonClasses} disabled={disabled} onClick={onClick}>
      {isIconOnly ? (
        leadingIcon && renderIcon(leadingIcon)
      ) : (
        <>
          {leadingIcon && renderIcon(leadingIcon)}
          {text && <span>{text}</span>}
          {trailingIcon && renderIcon(trailingIcon)}
        </>
      )}
    </button>
  );
};

export default Button;
