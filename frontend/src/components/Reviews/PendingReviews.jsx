import PendingReview from "./PendingReview";

const PendingReviews = ({ meals }) => {
  console.log(meals);

  return (
    <div
      className={`grid ${
        meals.length === 1
          ? "grid-cols-1"
          : meals.length > 1
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1"
          : ""
      } gap-x-10 gap-y-7`}
    >
      {meals.map((meal) => (
        <PendingReview key={meal._id} meal={meals} />
      ))}
    </div>
  );
};

export default PendingReviews;
