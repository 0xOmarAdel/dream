import Stars from "../../ui/Stars";

const MenuRatingFilter = ({ selectedRatings, setSelectedRatings }) => {
  const toggleRating = (rating) => {
    setSelectedRatings((prevSelectedRatings) => {
      const updatedArray = [...prevSelectedRatings];

      const elementIndex = updatedArray.indexOf(rating);

      updatedArray.indexOf(rating) !== -1
        ? updatedArray.splice(elementIndex, 1)
        : updatedArray.push(rating);

      return updatedArray;
    });
  };

  return (
    <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
      <input type="checkbox" />
      <div className="collapse-title px-0 text-xl font-medium">Rating</div>
      <div className="collapse-content px-0">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                checked={selectedRatings.includes(rating)}
                className="checkbox checkbox-primary checkbox-sm"
                onChange={() => toggleRating(rating)}
              />
              <Stars
                max={5}
                numberOfStars={rating}
                containerClasses="text-xl"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuRatingFilter;
