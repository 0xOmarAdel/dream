import restaurant from "/assets/restaurant.jpg";
const About = () => {
  return (
    <section className="overflow-hidden px-4 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/794a4fda36a64b7fafd20fbcb5971633"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://cdn.sortiraparis.com/images/80/100789/834083-too-restaurant-too-hotel-paris-photos-menu-plats.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-xl font-semibold text-primary">
                About Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                We are making customers happy by giving them our Meals.
              </h2>
              <p className="mb-5 text-base text-body-color font-medium">
                At <span className="text-sky-500 font-semibold">Dream</span>,
                our journey began with a passion for cooking. Established in
                2023, we set out to create a haven for food enthusiasts, a place
                where every meal tells a story. Over the years, we've evolved
                and refined our menu to bring you a curated selection of dishes
                that reflect our commitment to quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
