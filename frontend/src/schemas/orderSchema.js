import * as Yup from "yup";

export const orderSchema = Yup.object().shape({
  apartment: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});
