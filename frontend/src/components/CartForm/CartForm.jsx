import { Formik, Form } from "formik";
import FormikField from "../../ui/FormikField";
import { orderSchema } from "../../schemas/orderSchema";
import Button from "../../ui/Button";

const CartForm = ({ setFormSubmitted, setFormikValues }) => {
  return (
    <Formik
      initialValues={{
        apartment: "",
        street: "",
        city: "",
        country: "",
        zipCode: "",
        phone: "",
      }}
      validationSchema={orderSchema}
      onSubmit={(values) => {
        setFormikValues(values);
        setFormSubmitted(true);
      }}
    >
      {({ errors, touched, isValid }) => (
        <Form className="flex flex-col gap-4">
          <FormikField
            name="apartment"
            placeholder="Apartment"
            error={errors.apartment}
            touched={touched.apartment}
          />
          <FormikField
            name="street"
            placeholder="Street"
            error={errors.street}
            touched={touched.street}
          />
          <FormikField
            name="city"
            placeholder="City"
            error={errors.city}
            touched={touched.city}
          />
          <FormikField
            name="country"
            placeholder="Country"
            error={errors.country}
            touched={touched.country}
          />
          <FormikField
            name="zipCode"
            placeholder="ZIP Code"
            error={errors.zipCode}
            touched={touched.zipCode}
          />
          <FormikField
            name="phone"
            placeholder="Phone Number"
            error={errors.phone}
            touched={touched.phone}
          />
          <Button type="submit" text="Submit" disabled={!isValid} />
        </Form>
      )}
    </Formik>
  );
};

export default CartForm;
