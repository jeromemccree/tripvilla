import React from "react";
import Image from "next/image";
import { Users } from "untitledui-js";
import classNames from "classnames";

export const Options = {
  size: {
    xs: "xs" as const,
    sm: "sm" as const,
    md: "md" as const,
    lg: "lg" as const,
    xl: "xl" as const,
    "2xl": "2xl" as const,
    profileSm: "profileSm" as const,
    profileMd: "profileMd" as const,
    profileLg: "profileLg" as const,
  },
};

export type AvatarProps = {
  size: keyof typeof Options.size;
  src?: string;
  alt?: string;
  className?: string;
  placeholder?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const sizeValues = {
  xs: { image: 24, icon: 16 },
  sm: { image: 32, icon: 20 },
  md: { image: 40, icon: 24 },
  lg: { image: 48, icon: 28 },
  xl: { image: 56, icon: 32 },
  "2xl": { image: 64, icon: 32 },
  profileSm: { image: 72, icon: 36 },
  profileMd: { image: 96, icon: 48 },
  profileLg: { image: 160, icon: 80 },
};

const createAvatar = (
  sizeValues: { [key: string]: { image: number; icon: number } },
  borderColor: string,
  displayName: string,
) => {
  const Component = ({ size, src, alt, placeholder, onClick, className }: AvatarProps) => {
    const sizeValue = sizeValues[size]?.image;
    const iconSizeValue = sizeValues[size]?.icon;
    return (
      <div
        style={{ width: sizeValue, height: sizeValue }}
        className={classNames(
          "inline-block flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-opacity-10 focus:border-4 focus:border-gray-300 focus:border-opacity-20",
          borderColor,
          className,
          placeholder ? "bg-gray-100" : "",
          sizeValue,
        )}
        tabIndex={0}
        onClick={onClick}
      >
        {placeholder || !src ? (
          <Users.User01 size={iconSizeValue?.toString()} className={"stroke-gray-600"} />
        ) : (
          <Image src={src} alt={alt || ""} width={sizeValue} height={sizeValue} layout="fixed" />
        )}
      </div>
    );
  };
  Component.displayName = displayName;
  return Component;
};
export const Avatar = createAvatar(sizeValues, "border-black", "Avatar");
export const ProfileAvatar = createAvatar(sizeValues, "border-white", "ProfileAvatar");
