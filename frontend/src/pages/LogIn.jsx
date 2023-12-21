import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../store/slices/userAuthSlice";
import { logInSchema } from "../schemas/loginSchema";

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
          Add usericon image
          <img src="usericon.png" alt="login" className="h-[500px]" />
        </div>
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1>Sign In</h1>
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
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
