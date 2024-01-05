import { twMerge } from "tailwind-merge";

const Button = ({
  type,
  icon: Icon,
  text,
  disabled,
  classes,
  iconClasses,
  onClick,
}) => {
  return (
    <button
      type={type || "button"}
      className={twMerge(
        `btn min-h-fit h-fit py-3 ${
          disabled
            ? "!bg-gray-400 !bg-opacity-100 !text-black"
            : "btn-primary text-white"
        }`,
        classes || ""
      )}
      onClick={onClick || (() => {})}
      disabled={disabled}
    >
      {Icon ? <Icon className={iconClasses} /> : ""} {text}
    </button>
  );
};

export default Button;
