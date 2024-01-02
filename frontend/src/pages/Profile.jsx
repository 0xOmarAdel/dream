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
import Section from "../ui/Section";

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
    <div className="grid grid-cols-12 min-h-screen overflow-hidden">
      <div className="lg:col-span-3">
        <ProfileSidebar />
      </div>
      <Section classes="col-span-12 lg:col-span-9">
        <h1 className="text-3xl text-gray-600 font-bold mb-6">Profile</h1>
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
            <Form className="flex flex-col gap-6">
              <FormikField
                type="text"
                name="name"
                placeholder="First Name"
                touched={touched.name}
                error={errors.name}
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
                name="password"
                placeholder="Password"
                touched={touched.password}
                error={errors.password}
              />
              <FormikField
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
              />
              <Button type="submit" text={"Save"} disabled={!isValid} />
            </Form>
          )}
        </Formik>
      </Section>
    </div>
  );
};

export default Profile;
