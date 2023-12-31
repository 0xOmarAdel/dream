import { Field } from "formik";
import { twMerge } from "tailwind-merge";

const FormikField = ({
  as,
  name,
  type,
  placeholder,
  error,
  touched,
  selectOptions,
  label,
  inputClasses,
  containerClasses,
  errorClasses,
}) => {
  return (
    <div
      className={twMerge("w-full flex flex-col gap-1", containerClasses || "")}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        as={as}
        name={name}
        type={!as && (type || "text")}
        placeholder={placeholder}
        autocomplete="off"
        className={twMerge(
          `w-full px-3 py-2 bg-transparent border outline-none rounded-md transition duration-300 focus:border-primary ${
            error && touched ? "border-red-300" : "border-gray-300"
          }`,
          inputClasses || ""
        )}
      >
        {selectOptions &&
          selectOptions.map((selectOption) => (
            <option key={selectOption.value} value={selectOption.value}>
              {selectOption.text}
            </option>
          ))}
      </Field>
      {error && touched && (
        <div
          className={twMerge(
            "flex flex-row gap-1 text-sm text-gray-600",
            errorClasses || ""
          )}
        >
          <span className="text-lg text-red-500 -translate-y-0.5">*</span>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default FormikField;
