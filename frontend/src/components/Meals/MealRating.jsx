import Stars from "../ui/Stars";

const MealRating = ({ rating, starsContainerClasses, showModal }) => {
  return (
    <div
      className={showModal ? "cursor-pointer" : ""}
      onClick={showModal || (() => {})}
    >
      <Stars
        max={5}
        numberOfStars={rating}
        containerClasses={starsContainerClasses}
      />
    </div>
  );
};

export default MealRating;
