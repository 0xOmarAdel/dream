import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { login } from "../store/slices/userAuthSlice";
import { logInSchema } from "../schemas/loginSchema";
import Lottie from "lottie-react";
import chef from "../assets/chef.json";
import FormikField from "../ui/FormikField";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Divider from "../ui/Divider";

const LogIn = () => {
  const dispatch = useDispatch();

  const submitHandler = async (values) => {
    await dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
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
              Sign In
            </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={logInSchema}
              onSubmit={(values) => {
                submitHandler(values);
              }}
            >
              {({ errors, touched, isValid }) => (
                <Form className="flex flex-col gap-6">
                  <FormikField
                    name="email"
                    type="email"
                    placeholder="Email"
                    error={errors.email}
                    touched={touched.email}
                    inputClasses="border-gray-400"
                  />
                  <FormikField
                    name="password"
                    type="password"
                    placeholder="*******"
                    error={errors.password}
                    touched={touched.password}
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
            <p className="text-center">
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
  );
};

export default LogIn;
