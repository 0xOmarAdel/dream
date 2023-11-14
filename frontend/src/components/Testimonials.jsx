import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = [
  {
    Rater: "Shrouk",
    comment: "Grilled beef steak and potatoes on plate.",
  },
  {
    Rater: "Noah",
    comment: "Grilled beef steak and potatoes on plate.",
  },
  {
    Rater: "Risky",
    comment: "Grilled beef steak and potatoes on plate.",
  },
  {
    Rater: "Mr ghost",
    comment: "Grilled beef steak and potatoes on plate.",
  },
];

const Testimonials = () => {
  return (
    <section className="hero min-h-screen bg-gray-50">
      <div className="hero-content text-center">
        <div className="max-w-full ">
          <h1 className="text-5xl font-bold text-sky-500">Testimonials</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center md:flex md:flex-row md:justify-center md:flex-wrap">
            {Reviews.map((review, index) => (
              <ReviewCard
                key={index}
                Rating={review.Rater}
                comment={review.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
