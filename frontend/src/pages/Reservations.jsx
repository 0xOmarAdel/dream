import { useFormik } from "formik";
import ReservationSystem from "../components/ResrevationsSystem";

const Reservations = () => {
  const formik = useFormik({
    initialValues: {
      resDate: "",
      resTime: "",
      guests: "",
      occasion: "",
      name: "",
      email: "",
      phone: "",
      agree: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.resDate) {
        errors.resDate = "Required";
      }
      if (!values.resTime) {
        errors.resTime = "Required";
      }
      if (!values.guests) {
        errors.guests = "Required";
      }
      return errors;
    },
  });

  return (
    <div className="flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5">
      <div className="xl:max-w-7xl bg-white w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-start text-4xl sm:text-3xl font-semibold text-sky-500">
            Booking
          </h1>
          <form className="w-full mt-5 sm:mt-8" onSubmit={formik.handleSubmit}>
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="">Choose Date</label>
                <input
                  id="resDate"
                  name="resDate"
                  value={formik.values.resDate}
                  onChange={formik.handleChange}
                  type="date"
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black placeholder:text-black/70"
                />
                <label>Choose Time</label>
                <select
                  id="resTime"
                  name="resTime"
                  value={formik.values.resTime}
                  onChange={formik.handleChange}
                  type="time"
                  placeholder="Choose Time"
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black placeholder:text-black/70"
                >
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </div>
              <label>Number of Guests</label>
              <input
                id="guests"
                name="guests"
                value={formik.values.guests}
                onChange={formik.handleChange}
                type="number"
                placeholder="1"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black placeholder:text-black/70"
                />
                <select
                  id="occasion"
                  name="occasion"
                  value={formik.values.occasion}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Occasion (optional)"
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black placeholder:text-black/70"
                >
                  <option>Anniversaries</option>
                  <option>Baptism</option>
                  <option>Birthday</option>
                  <option>Engagement</option>
                  <option>Other</option>
                </select>
              </div>
              <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <input
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                type="number"
                placeholder="Enter Your Phone No"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <input
                id="comment"
                name="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                type="text"
                placeholder="Comment (optional)"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <div className="flex items-center gap-1.5  justify-start pl-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="agree"
                      onChange={formik.handleChange}
                      value={formik.values.agree}
                      checked={formik.values.agree}
                      id="agree"
                      type="checkbox"
                      className="checkbox-xs checkbox-primary bg-white"
                    />
                  </label>
                </div>
                <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                  I agree to the
                  <span className="text-sky-500">&nbsp;Terms</span>
                  &nbsp;and
                  <span className="text-sky-500">&nbsp;Privacy Policy</span>.
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button
                  className="btn btn-active hover:!bg-sky-500 btn-primary !text-black btn-block max-w-[200px]"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Book A Table
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          <ReservationSystem />
        </div>
      </div>
    </div>
  );
};

export default Reservations;
