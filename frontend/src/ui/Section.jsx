import { twMerge } from "tailwind-merge";

const Section = ({ children, classes }) => {
  return (
    <section
      className={twMerge(
        "px-8 sm:px-10 md:px-16 lg:px-16 xl:px-22 py-12",
        classes || ""
      )}
    >
      {children}
    </section>
  );
};

export default Section;
