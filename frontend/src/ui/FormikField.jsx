import { Field } from "formik";
import { twMerge } from "tailwind-merge";

const FormikField = ({ name, type, placeholder, classes, error, touched }) => {
  return (
    <div className="flex flex-col gap-1">
      <Field
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        className={twMerge(
          `w-full px-3 py-2 bg-transparent border outline-none rounded-md transition duration-300 focus:border-primary ${
            error ? "border-red-300" : "border-gray-300"
          }`,
          classes || ""
        )}
      />
      {error && touched && (
        <div className="flex flex-row gap-1">
          <span className="text-lg text-red-500 -translate-y-0.5">*</span>
          <p className="text-sm text-gray-600">{error}</p>
        </div>
      )}
    </div>
  );
};

export default FormikField;