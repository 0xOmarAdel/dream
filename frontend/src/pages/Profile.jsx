import { Formik, Form } from "formik";
import FormikField from "../ui/FormikField";
import { userEditSchema } from "../schemas/userEditSchema";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userAuthSlice";
import axiosApi from "../utils/axiosConfig";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import { toast } from "react-toastify";
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

      toast.error("You've successfully updated your account information.");
    } catch (error) {
      toast.error("An error occurred while submitting your request.");
    }
  };

  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="lg:col-span-3">
        <ProfileSidebar />
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
                      />
                    </div>
                    <div className="mx-auto mb-6 text-center">
                      <Button type="submit" text={"Save"} disabled={!isValid} />
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
