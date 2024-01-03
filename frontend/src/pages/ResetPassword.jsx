import { Formik, Form } from "formik";
import FormikField from "../ui/FormikField";
import { resetPasswordSchema } from "../schemas/resetPasswordSchema";
import Button from "../ui/Button";
import Lottie from "lottie-react";
import chef from "../assets/chef.json";
import { Link } from "react-router-dom";
import Divider from "../ui/Divider";

const ResetPassword = () => {
  const submitHandler = async (values) => {
    console.log(values);
  };

  return (
    <div
      className="min-h-[80vh] flex justify-center items-center w-full bg-white px-5 py-5"
      style={{
        backgroundImage:
          "url(https://cdn.myshoptet.com/usr/www.gymclothes.cz/user/documents/upload/blog2/co%20je%20to%20cico%20dieta.jpg)",
      }}
    >
      <div className="items-center justify-center glass rounded-xl">
        <div className="grid grid-cols-2 items-center">
          <Lottie
            animationData={chef}
            className="col-span-1 h-full hidden md:block bg-primary rounded-ss-xl rounded-es-xl"
          />

          <div className="col-span-2 md:col-span-1 p-14 flex flex-col gap-6">
            <h1 className="text-start text-4xl sm:text-3xl font-semibold text-primary">
              Reset Password
            </h1>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                submitHandler(values);
              }}
              validationSchema={resetPasswordSchema}
            >
              {({ isValid, errors, touched }) => (
                <Form className="flex flex-col gap-6">
                  <FormikField
                    name="email"
                    type="email"
                    placeholder="Email"
                    error={errors.email}
                    touched={touched.email}
                    inputClasses="border-gray-400"
                  />
                  <Button
                    type="submit"
                    text="Submit"
                    disabled={!isValid}
                    classes="mt-2"
                  />
                </Form>
              )}
            </Formik>
            <Divider />
            <div className="flex flex-col gap-3">
              <p className="text-gray-600 text-center">
                Remember your password?{" "}
                <Link to="/login" className="text-primary">
                  Sign In
                </Link>
                .
              </p>
              <p className="text-gray-600 text-center">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="text-primary">
                  Sign Up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
