import classNames from "classnames";

interface BaseGroupButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
  isCurrent?: boolean;
}

const BaseGroupButton: React.FC<BaseGroupButtonProps> = ({
  text,
  className,
  onClick,
  isCurrent,
}) => {
  const buttonClasses = classNames(
    "text-sm font-semibod px-4 py-2 item-center flex-inline",
    className,
    isCurrent ? "text-gray-800 bg-gray-50" : "text-gray-700 hover:bg-gray-50 hover:text-gray-800",
  );

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export type ButtonGroupProps = {
  buttons: BaseGroupButtonProps[];
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <span className="isolate inline-flex overflow-hidden rounded-md border  border-gray-300 shadow-xs">
      {buttons.map((button, index) => (
        <BaseGroupButton
          key={index}
          text={button.text}
          className={classNames(button.className, index !== 0 ? "border-l border-gray-300" : "")}
          onClick={button.onClick}
          isCurrent={button.isCurrent}
        />
      ))}
    </span>
  );
};
export default ButtonGroup;
