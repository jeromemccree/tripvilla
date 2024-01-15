"use client";
import React from "react";
import { Alerts } from "untitledui-js";
import classNames from "classnames";

const Input: React.FC<{
  children: React.ReactNode;
  hint?: string;
  label: string;
  isDestructive?: boolean;
}> = ({ children, hint, label, isDestructive = false }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="block text-sm font-medium leading-5 text-gray-700">{label}</label>
      <div className="relative">{children}</div>
      {hint ? (
        <p className={classNames("text-sm", isDestructive ? "text-error-500" : "text-gray-500")}>
          {hint}
        </p>
      ) : null}
    </div>
  );
};

const defaultColor = "border-gray-300 focus:border-brand-300  focus:ring-brand-300 ";
const destructiveColor = "border-error-300 focus:border-error-300 focus:ring-error-300";
const baseClasses =
  "w-full rounded-md placeholder:text-gray-500 border text-gray-900  px-3.5 py-2.5  shadow-xs outline-none focus:ring focus:ring-opacity-25";

export const InputField: React.FC<{
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  hint?: string;
  label: string;
  isDestructive?: boolean;
  value: string;
  icon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  id,
  name,
  type = "text",
  placeholder,
  hint,
  label,
  isDestructive = false,
  value,
  icon,
  onChange,
}) => {
  const colorClasses = isDestructive ? destructiveColor : defaultColor;
  return (
    <Input label={label} hint={hint} isDestructive={isDestructive}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {icon
          ? React.cloneElement(icon as React.ReactElement, {
              className: classNames("stoke-2 stroke-gray-500 h-5 w-5"),
            })
          : null}
      </div>
      <input
        type={type}
        name={name}
        id={id}
        className={classNames(icon ? "pl-10" : null, baseClasses, colorClasses)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isDestructive ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Alerts.AlertCircle className="h-4 w-4 stroke-error-500" />
        </div>
      ) : null}
    </Input>
  );
};

export const TextAreaField: React.FC<{
  id: string;
  name: string;
  placeholder?: string;
  hint?: string;
  label: string;
  rows: number;
  isDestructive?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}> = ({ id, name, placeholder, hint, label, rows, isDestructive = false, value, onChange }) => {
  const colorClasses = isDestructive ? destructiveColor : defaultColor;
  return (
    <Input label={label} hint={hint} isDestructive={isDestructive}>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className={classNames(baseClasses, colorClasses)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Input>
  );
};
