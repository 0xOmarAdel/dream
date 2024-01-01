import { useState } from "react";
import { Formik, Form } from "formik";
import FormikField from "../ui/FormikField";
import { userEditSchema } from "../schemas/userEditSchema";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userAuthSlice";
import axiosApi from "../utils/axiosConfig";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const user = useSelector(selectUser);

  const submitEdit = async (values) => {
    try {
      await axiosApi.request({
        method: "PUT",
        url: "/user",
        data: values,
      });
    } catch (error) {
      console.error("Error submitting edit:", error.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowPassword(!showPassword);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const notify = () => toast.success("Profile updated successfully!");

  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="lg:col-span-3">
        <ProfileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <main>
          <div className="max-w-screen-2xl lg:p-4">
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold mb-6">Profile</h1>
              <Formik
                initialValues={{
                  name: user ? `${user.firstName} ${user.lastName}` : "",
                  email: user ? user.email : "",
                  password: "",
                  confirmPassword: "",
                }}
                onSubmit={(values, actions) => {
                  submitEdit(values);
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 1000);
                  console.log(values);
                }}
                validationSchema={userEditSchema}
              >
                {({ isValid, errors, touched }) => (
                  <Form className="w-full">
                    <div className="mx-auto mb-6 text-center">
                      <FormikField
                        type="text"
                        name="name"
                        placeholder="First Name"
                        touched={touched.name}
                        error={errors.name}
                        inputClasses={"input input-bordered input-primary"}
                      />
                    </div>
                    <div className="mx-auto mb-6 text-center">
                      <FormikField
                        type="email"
                        name="email"
                        placeholder="Email address"
                        touched={touched.email}
                        error={errors.email}
                        inputClasses={"input input-bordered input-primary"}
                      />
                    </div>
                    <div className="mx-auto mb-6 text-center">
                      <FormikField
                        type="password"
                        name="password"
                        placeholder="Password"
                        touched={touched.password}
                        error={errors.password}
                        inputClasses={"input input-bordered input-primary"}
                        onClick={toggleShowPassword}
                      />
                    </div>
                    <div className="mx-auto mb-6 text-center">
                      <FormikField
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        touched={touched.confirmPassword}
                        error={errors.confirmPassword}
                        inputClasses={"input input-bordered input-primary"}
                        onClick={toggleShowConfirmPassword}
                      />
                    </div>
                    <div className="mx-auto mb-6 text-center">
                      <Button
                        type="submit"
                        text={"Save"}
                        disabled={!isValid}
                        onClick={notify}
                      />
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        progressStyle={{ backgroundColor: "#0ea5ea" }}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
