import { useRef } from "react";
import { useInView } from "framer-motion";
import Section from "../../ui/Section";
import FeaturedMeals from "./FeaturedMeals";
import GridImages from "./GridImages";

const SpecialOffers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section
      classes="max-w-7xl mx-auto py-24 grid lg:grid-cols-2 items-center gap-12"
      ref={ref}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-primary capitalize">from the menu</p>
          <p className="text-4xl text-gray-700 font-medium uppercase">
            special offers
          </p>
        </div>
        <FeaturedMeals isInView={isInView} />
      </div>
      <GridImages isInView={isInView} />
    </Section>
  );
};

export default SpecialOffers;
