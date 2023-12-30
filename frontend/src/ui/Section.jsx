import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

const Section = forwardRef(({ children, classes }, ref) => {
  return (
    <section
      ref={ref}
      className={twMerge(
        "px-8 sm:px-10 md:px-16 lg:px-16 xl:px-22 py-12",
        classes || ""
      )}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";

export default Section;
