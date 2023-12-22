import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { register } from "../store/slices/userAuthSlice";
import { registerSchema } from "../schemas/registerSchema";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const submitHandler = async (values) => {
    await dispatch(
      register({
        firstName: values.firstName,
        lastName: values.lastName,
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
            src="https://imgix.bustle.com/uploads/image/2023/6/12/ba491d0c-00fb-48c8-be45-1edf99930180-1297317.jpg?w=400&h=300&fit=crop&crop=faces&auto=format%2Ccompress"
            alt="login"
            className="h-[500px]"
          />
        </div>
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-start text-4xl sm:text-3xl font-semibold text-sky-500 mb-5">
            Sign Up
          </h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              submitHandler(values);
            }}
          >
            <Form className="flex flex-col gap-5">
              <Field
                id="firstName"
                name="firstName"
                placeholder="Jane"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <ErrorMessage name="firstName" />
              <Field
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <ErrorMessage name="lastName" />
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
                Submit
              </button>
              <div>
                <p className="text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="text-sky-500">
                    Sign In
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

export default Register;
