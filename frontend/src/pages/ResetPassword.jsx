import sign from "../assets/formBg.jpg";
import { Formik, Form } from "formik";
import FormikField from "../ui/FormikField";
import { resetPasswordSchema } from "../schemas/resetPasswordSchema";
import Button from "../ui/Button";
import Lottie from "lottie-react";
import login from "../assets/Login.json";
const ResetPassword = () => {
  return (
    <div className="">
      <div className="min-h-screen flex justify-center items-center h-full">
        <div>
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="glass border border-slate-100 rounded-md p-8 shadow-lg backdrop:filter backdrop:blur-sm  relative">
          <h1 className="text-4xl sm:text-3xl font-semibold mb-5 text-center">
            Reset Password
          </h1>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={resetPasswordSchema}
          >
            {({ isValid, errors, touched }) => (
              <Form>
                <div className="relative my-4 text-sky-500">
                  <FormikField
                    type="email"
                    name="email"
                    placeholder="Email address"
                    touched={touched.email}
                    error={errors.email}
                    inputClasses={"input input-bordered input-primary"}
                    label={"Email"}
                    labelClasses={
                      "absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  />
                </div>
                <Button
                  type="submit"
                  text="Reset Password"
                  disabled={!isValid}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
