import { FaGlobeAmericas } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <h1 className="text-center text-sky-500 font-bold text-3xl lg:text-4xl mb-6 px-4 lg:px-0">
        Contact with Dream .
      </h1>
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://cdn.sortiraparis.com/images/80/100789/834083-too-restaurant-too-hotel-paris-photos-menu-plats.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <FaGlobeAmericas className="mx-auto mb-6 h-8 w-8 text-primary" />
                <h6 className="font-medium">Michigan</h6>
              </div>
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <SlLocationPin className="mx-auto mb-6 h-8 w-8 text-primary" />
                <h6 className="font-medium">Michigan, 94126</h6>
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
              <form>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Name"
                  />
                  <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                    Name
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Email address"
                  />
                  <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                    Email address
                  </label>
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                  <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                    Message
                  </label>
                </div>
                <button className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 lg:mb-0">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
