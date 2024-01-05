import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="overflow-hidden px-4 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <motion.img
                    src={about1}
                    alt=""
                    className="w-full rounded-2xl"
                    variants={{
                      hidden: {
                        opacity: 0,
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          ease: "easeInOut",
                          duration: 0.5,
                          delay: 0.2,
                        },
                      },
                    }}
                    initial={"hidden"}
                    animate={isInView ? "visible" : "hidden"}
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <motion.img
                    src={about2}
                    alt=""
                    className="w-full rounded-2xl"
                    variants={{
                      hidden: {
                        opacity: 0,
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          ease: "easeInOut",
                          duration: 0.5,
                          delay: 0.4,
                        },
                      },
                    }}
                    initial={"hidden"}
                    animate={isInView ? "visible" : "hidden"}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <motion.img
                    src={about3}
                    alt=""
                    className="w-full rounded-2xl"
                    variants={{
                      hidden: {
                        opacity: 0,
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          ease: "easeInOut",
                          duration: 0.5,
                          delay: 0.6,
                        },
                      },
                    }}
                    initial={"hidden"}
                    animate={isInView ? "visible" : "hidden"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-3xl font-semibold text-primary">
                About Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-gray-700 sm:text-[40px]/[48px]">
                We are making customers happy by giving them our Meals.
              </h2>
              <p className="mb-5 text-lg text-gray-600 font-medium leading-8">
                At <span className="text-primary font-semibold">Dream</span>,
                our journey began with a passion for cooking. Established in
                2023, we set out to create a haven for food enthusiasts, a place
                where every meal tells a story. Over the years, we&apos;ve
                evolved and refined our menu to bring you a curated selection of
                dishes that reflect our commitment to quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
