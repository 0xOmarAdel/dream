import { twMerge } from "tailwind-merge";

const Button = ({ type, text, disabled, classes, onClick }) => {
  return (
    <button
      type={type || "button"}
      className={twMerge(
        `btn min-h-fit h-fit py-3 text-white ${
          disabled ? "btn-disabled" : "btn-primary"
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
