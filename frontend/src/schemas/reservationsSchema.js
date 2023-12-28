import * as Yup from "yup";

export const reservationsSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
});
