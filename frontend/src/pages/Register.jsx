import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { register } from "../store/slices/userAuthSlice";
import { registerSchema } from "../schemas/registerSchema";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import chef from "../assets/chef.json";
import FormikField from "../ui/FormikField";
import Button from "../ui/Button";
import Divider from "../ui/Divider";

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
              {({ errors, touched, isValid }) => (
                <Form className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <FormikField
                      name="firstName"
                      placeholder="First Name"
                      error={errors.firstName}
                      touched={touched.firstName}
                      inputClasses="border-gray-400"
                    />
                    <FormikField
                      name="lastName"
                      placeholder="Last Name"
                      error={errors.lastName}
                      touched={touched.lastName}
                      inputClasses="border-gray-400"
                    />
                  </div>
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
            <p className="text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Sign In
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
