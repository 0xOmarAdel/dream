import { twMerge } from "tailwind-merge";

const Button = ({ type, text, disabled, classes, onClick }) => {
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
      {text}
    </button>
  );
};

export default Button;
