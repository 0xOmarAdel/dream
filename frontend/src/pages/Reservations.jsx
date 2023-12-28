import { Formik, Form } from "formik";
import ReservationSystem from "../components/ResrevationsSystem";
import FormikField from "../ui/FormikField";
import Button from "../ui/Button";
import { reservationsSchema } from "../schemas/reservationsSchema";
import { useState } from "react";

const Reservations = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedSeats);

  return (
    <div className="flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5">
      <div className="xl:max-w-7xl bg-white w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-start text-4xl sm:text-3xl font-semibold text-sky-500">
            Booking
          </h1>
          <Formik
            initialValues={{
              resDate: "",
              resTime: "17",
              guests: "1",
              occasion: "anniversaries",
              name: "",
              email: "",
              phone: "",
            }}
            validationSchema={reservationsSchema}
            onSubmit={(values) => {
              if (selectedSeats.length !== 0) {
                console.log(values);
              }
            }}
          >
            {({ errors, touched, isValid }) => (
              <Form className="mt-10 flex flex-col gap-4">
                <div className="w-full flex flex-row gap-8">
                  <FormikField
                    type="date"
                    name="resDate"
                    placeholder="resDate"
                    error={errors.resDate}
                    touched={touched.resDate}
                    inputClasses={"input input-bordered input-primary"}
                  />
                  <FormikField
                    as="select"
                    name="resTime"
                    error={errors.resTime}
                    touched={touched.resTime}
                    selectOptions={[
                      { value: "17", text: "17:00" },
                      { value: "18", text: "18:00" },
                      { value: "19", text: "19:00" },
                      { value: "20", text: "20:00" },
                      { value: "21", text: "21:00" },
                      { value: "22", text: "22:00" },
                    ]}
                    inputClasses={"input input-bordered input-primary"}
                  />
                </div>
                <div className="w-full flex flex-row gap-8">
                  <FormikField
                    name="name"
                    placeholder="Name"
                    error={errors.name}
                    touched={touched.name}
                    inputClasses={"input input-bordered input-primary"}
                  />
                  <FormikField
                    as="select"
                    name="occasion"
                    error={errors.occasion}
                    touched={touched.occasion}
                    selectOptions={[
                      { value: "anniversaries", text: "Anniversaries" },
                      { value: "baptism", text: "Baptism" },
                      { value: "birthday", text: "Birthday" },
                      { value: "engagement", text: "Engagement" },
                      { value: "other", text: "Other" },
                    ]}
                    inputClasses={"input input-bordered input-primary"}
                  />
                </div>
                <FormikField
                  name="email"
                  placeholder="Email"
                  error={errors.email}
                  touched={touched.email}
                  inputClasses={"input input-bordered input-primary"}
                />
                <FormikField
                  name="phone"
                  placeholder="Phone Number"
                  error={errors.phone}
                  touched={touched.phone}
                  inputClasses={"input input-bordered input-primary"}
                />
                <FormikField
                  type="number"
                  name="guests"
                  placeholder="Guests"
                  error={errors.guests}
                  touched={touched.guests}
                  inputClasses={"input input-bordered input-primary"}
                />
                <FormikField
                  as="textarea"
                  name="comment"
                  placeholder="Comment (optional)"
                  error={errors.comment}
                  touched={touched.comment}
                  inputClasses={"input input-bordered input-primary"}
                />
                <Button type="submit" text="Book A Table" disabled={!isValid} />
              </Form>
            )}
          </Formik>
        </div>
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          <ReservationSystem
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
        </div>
      </div>
    </div>
  );
};

export default Reservations;
