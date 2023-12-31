import { Formik, Form, Field } from "formik";
import FormikField from "../../ui/FormikField";
import Button from "../../ui/Button";
import { reservationsSchema } from "../../schemas/reservationsSchema";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { SlCalender } from "react-icons/sl";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userAuthSlice";
import axiosApi from "../../utils/axiosConfig";

const ReservationForm = () => {
  const user = useSelector(selectUser);

  const today = new Date();

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 30);

  const currentHour = today.getHours();

  const submitReservation = async (values) => {
    try {
      await axiosApi.request({
        method: "POST",
        url: "/reservation",
        data: values,
      });
    } catch (error) {
      console.error("Error submitting reservation:", error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        name: user ? `${user.firstName} ${user.lastName}` : "",
        email: user ? user.email : "",
        phone: "",
        guests: "1",
        resDate: today,
        resTime: `${currentHour}:00`,
      }}
      validationSchema={reservationsSchema}
      onSubmit={(values) => {
        submitReservation(values);
      }}
    >
      {({ errors, touched, isValid }) => (
        <Form className="mt-10 flex flex-col gap-8 md:gap-12">
          <div className="w-full grid md:grid-cols-3 gap-8">
            <FormikField
              name="name"
              placeholder="Name"
              error={errors.name}
              touched={touched.name}
              inputClasses="px-0 border-transparent border-b-gray-300 rounded-none text-xl focus:border-transparent focus:border-b-primary placeholder:text-gray-300"
              errorClasses="mt-2 text-gray-300"
            />
            <FormikField
              name="email"
              placeholder="Email"
              error={errors.email}
              touched={touched.email}
              inputClasses="px-0 border-transparent border-b-gray-300 rounded-none text-xl focus:border-transparent focus:border-b-primary placeholder:text-gray-300"
              errorClasses="mt-2 text-gray-300"
            />
            <FormikField
              name="phone"
              placeholder="Phone Number"
              error={errors.phone}
              touched={touched.phone}
              inputClasses="px-0 border-transparent border-b-gray-300 rounded-none text-xl focus:border-transparent focus:border-b-primary placeholder:text-gray-300"
              errorClasses="mt-2 text-gray-300"
            />
          </div>

          <div className="w-full grid md:grid-cols-3 gap-8">
            <FormikField
              as="select"
              name="guests"
              placeholder="Guests"
              error={errors.guests}
              touched={touched.guests}
              selectOptions={[
                { value: "1", text: "1 person" },
                { value: "2", text: "2 people" },
                { value: "3", text: "3 people" },
                { value: "4", text: "4 people" },
                { value: "5", text: "5 people" },
              ]}
              inputClasses="px-0 border-transparent border-b-gray-300 rounded-none text-xl focus:border-transparent focus:border-b-primary placeholder:text-gray-300"
              errorClasses="mt-2 text-gray-300"
            />
            <Field name="resDate">
              {({ field, form }) => {
                const { setFieldValue } = form;
                const { value } = field;

                return (
                  <DatePicker
                    className="reservationDatePicker"
                    calendarClassName="reservationDatePickerCalender"
                    clearIcon={null}
                    calendarIcon={SlCalender}
                    minDate={tomorrow}
                    maxDate={futureDate}
                    {...field}
                    name="resDate"
                    id="resDate"
                    value={value}
                    onChange={(value) => setFieldValue("resDate", value)}
                  />
                );
              }}
            </Field>
            <Field name="resTime">
              {({ field, form }) => {
                const { setFieldValue } = form;
                const { value } = field;

                return (
                  <TimePicker
                    {...field}
                    className="reservationTimePicker"
                    name="resTime"
                    id="resTime"
                    clearIcon={null}
                    value={value}
                    onChange={(value) => setFieldValue("resTime", value)}
                    disableClock={true}
                    format="h a"
                  />
                );
              }}
            </Field>
          </div>

          <Button
            type="submit"
            text="Book A Table"
            classes="mt-5"
            disabled={!isValid}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
