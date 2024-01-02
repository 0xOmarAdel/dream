import { Formik, Form } from "formik";
import FormikField from "../ui/FormikField";
import { userEditSchema } from "../schemas/userEditSchema";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userAuthSlice";
import axiosApi from "../utils/axiosConfig";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import { toast } from "react-toastify";
import Section from "../ui/Section";

const Profile = () => {
  const user = useSelector(selectUser);

  const submitEdit = async (values) => {
    try {
      await axiosApi.request({
        method: "PUT",
        url: `/users/${user._id}`,
        data: values,
      });

      toast.error("You've successfully updated your account information.");
    } catch (error) {
      toast.error("An error occurred while submitting your request.");
    }
  };

  return (
    <div className="flex flex-row overflow-hidden">
      <ProfileSidebar />
      <Section classes="grow xl:px-44 py-24">
        <h1 className="text-3xl text-gray-600 font-bold mb-6">Profile</h1>
        <Formik
          initialValues={{
            firstName: user ? user.firstName : "",
            lastName: user ? user.lastName : "",
            email: user ? user.email : "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            submitEdit(values);
          }}
          validationSchema={userEditSchema}
        >
          {({ isValid, errors, touched }) => (
            <Form className="flex flex-col gap-6">
              <FormikField
                type="text"
                name="firstName"
                placeholder="First Name"
                touched={touched.firstName}
                error={errors.firstName}
              />
              <FormikField
                type="text"
                name="lastName"
                placeholder="Last Name"
                touched={touched.lastName}
                error={errors.lastName}
              />
              <FormikField
                type="email"
                name="email"
                placeholder="Email address"
                touched={touched.email}
                error={errors.email}
              />
              <FormikField
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
              />
              <Button type="submit" text="save" disabled={!isValid} classes="mt-4" />
            </Form>
          )}
        </Formik>
      </Section>
    </div>
  );
};

export default Profile;
