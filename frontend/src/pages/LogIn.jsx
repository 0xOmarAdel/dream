import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../store/slices/userAuthSlice";
import { logInSchema } from "../schemas/loginSchema";
import { Link } from "react-router-dom";

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
    <div className="flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5">
      <div className="xl:max-w-7xl bg-white w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          {/* Add usericon image */}
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="login"
            className="h-[500px]"
          />
        </div>
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-start text-4xl sm:text-3xl font-semibold text-sky-500 mb-5">
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
            <Form className="flex flex-col gap-5">
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <ErrorMessage name="email" />
              <Field
                id="password"
                name="password"
                placeholder="***********"
                type="password"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <ErrorMessage name="password" />
              <button
                type="submit"
                className="btn btn-active hover:!bg-sky-500 btn-primary !text-black btn-block max-w-[200px]"
              >
                Sign in
              </button>
              <div>
                <p className="text-center">
                  Forgot your password?{" "}
                  <Link to="/forgot-password" className="text-sky-500">
                    Reset Password
                  </Link>
                </p>
              </div>
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
    </div>
  );
};

export default LogIn;
