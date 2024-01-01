import { useState } from "react";
import { Formik, Form } from "formik";
import FormikField from "../../ui/FormikField";
import { userEditSchema } from "../../schemas/userEditSchema";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userAuthSlice";
import axiosApi from "../../utils/axiosConfig";

const UserInfo = () => {
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

  return (
    <>
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
              alert(JSON.stringify(values, null, 2));
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
                <Button type="submit" text={"Save"} disabled={!isValid} />
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor="first-name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      value={user.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="last-name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      value={user.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="current-password"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      name="current-password"
                      value={user.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="new-password"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      name="new-password"
                      value={user.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default UserInfo;
