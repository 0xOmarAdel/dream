import { Formik, Form } from "formik";
import FormikField from "../ui/FormikField";
import emailjs from "@emailjs/browser";
import { contactSchema } from "../schemas/contactSchema";
import { FaGlobeAmericas } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import Button from "../ui/Button";
import contact from "../assets/contact.jpg";

const Contact = () => {
  const sendEmail = (values) => {
    const { name, email, message } = values;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Dream",
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container my-24 mx-auto md:px-6">
      <h1 className="text-center text-sky-500 font-bold text-3xl lg:text-4xl mb-6 px-4 lg:px-0">
        Contact with Dream.
      </h1>
      <section className="mb-32">
        <div
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat]"
          style={{
            backgroundImage: `url(${contact}`,
          }}
        ></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <FaGlobeAmericas className="mx-auto mb-6 h-8 w-8 text-primary" />
                <h6 className="font-medium">California</h6>
              </div>
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <SlLocationPin className="mx-auto mb-6 h-8 w-8 text-primary" />
                <h6 className="font-medium">California, 94126</h6>
              </div>
              <div className="mx-auto mb-6 text-center md:mb-0">
                <FaPhoneAlt className="mx-auto mb-6 h-8 w-8 text-primary" />

                <h6 className="font-medium">+ 01 234 567 89</h6>
              </div>
              <div className="mx-auto text-center">
                <FaMoneyBills className="mx-auto mb-6 h-8 w-8 text-primary" />
                <h6 className="font-medium">Tax ID: 273 384</h6>
              </div>
            </div>
            <div className="mx-auto max-w-[700px]">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    sendEmail(values);
                    actions.setSubmitting(false);
                  }, 1000);
                  console.log(values);

                  alert(
                    "Thank you for the submission. Our Support will be in contact with you shortly"
                  );
                }}
                validationSchema={contactSchema}
              >
                {({ isValid, errors, touched }) => (
                  <Form>
                    <div className="relative mb-6">
                      <FormikField
                        type="text"
                        name="name"
                        placeholder="Name"
                        touched={touched.name}
                        error={errors.name}
                        inputClasses={"input input-bordered input-primary"}
                      />
                    </div>
                    <div className="relative mb-6">
                      <FormikField
                        type="email"
                        name="email"
                        placeholder="Email address"
                        touched={touched.email}
                        error={errors.email}
                        inputClasses={"input input-bordered input-primary"}
                      />
                    </div>
                    <div className="relative mb-6">
                      <FormikField
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        touched={touched.message}
                        error={errors.message}
                        inputClasses={"input input-bordered input-primary "}
                      />
                    </div>
                    <Button type="submit" text={"Send"} disabled={!isValid} />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
