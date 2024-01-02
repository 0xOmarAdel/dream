import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../store/slices/userAuthSlice";
import { logInSchema } from "../schemas/loginSchema";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import chef from "../assets/chef.json";

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
    <div className="flex justify-center items-center w-full bg-white px-5 py-5">
      {/* Animation */}
      <div className="hidden md:flex">
        <Lottie animationData={chef} className="min-h-screen" />
      </div>

      {/* Login Form */}
      <div className="mx-auto md:pb-12 w-fit h-fit md:py-0 items-center justify-center glass border border-slate-100 rounded-md p-12 shadow-lg backdrop:filter backdrop:blur-sm relative">
        <h1 className="text-start text-4xl sm:text-3xl font-semibold text-sky-500 my-6">
          Sign In
        </h1>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={logInSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          <Form className="flex flex-col gap-5">
            {/* Email field */}
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {/* Email error message */}
            <ErrorMessage name="email" />

            {/* Password field */}
            <Field
              id="password"
              name="password"
              placeholder="***********"
              type="password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {/* Password error message */}
            <ErrorMessage name="password" />

            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-active hover:!bg-sky-500 btn-primary !text-black btn-block max-w-[200px]"
            >
              Sign in
            </button>

            {/* Forgot password */}
            <div>
              <p className="text-center">
                Forgot your password?{" "}
                <Link to="/resetpassword" className="text-sky-500">
                  Reset Password
                </Link>
              </p>
            </div>

            {/* Sign up */}
            <div>
              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/register" className="text-sky-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LogIn;
