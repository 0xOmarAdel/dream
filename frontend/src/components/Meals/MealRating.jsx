import Stars from "../ui/Stars";

const MealRating = ({ rating, starsContainerClasses }) => {
  return (
    <Stars
      max={5}
      numberOfStars={rating}
      containerClasses={starsContainerClasses}
    />
  );
};

export default MealRating;
