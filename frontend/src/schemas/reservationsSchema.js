import * as Yup from "yup";

export const reservationsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .min(10, "Invalid phone number")
    .max(14, "Invalid phone number")
    .required("Required"),
  resDate: Yup.date().required("Required"),
  resTime: Yup.string().required("Required"),
  guests: Yup.string().required("Required"),
  occasion: Yup.string(),
  comments: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
});
