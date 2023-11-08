const Reservations = () => {
  return (
    <div className="flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5">
      <div className="xl:max-w-7xl bg-white w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-start text-4xl sm:text-3xl font-semibold text-sky-500">
            Booking
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="">Choose Date</label>
                <input
                  type="date"
                  id="res-date"
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black placeholder:text-black/70"
                />
                <label>Choose Time</label>
                <select
                  id="res-time"
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
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black placeholder:text-black/70"
                />
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black placeholder:text-black/70"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <input
                type="text"
                placeholder="Enter Your Phone No"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <input
                type="text"
                placeholder="Comment (optional)"
                className="input input-bordered input-primary w-full bg-white text-black placeholder:text-black/70"
              />
              <div className="flex items-center gap-1.5  justify-start pl-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
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
                <button className="btn btn-active hover:!bg-sky-500 btn-primary !text-black btn-block max-w-[200px]">
                  Book A Table
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          <img
            src="/assets/reservexample.png"
            alt="login"
            className="h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Reservations;
