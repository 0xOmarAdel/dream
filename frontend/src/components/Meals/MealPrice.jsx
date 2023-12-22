const MealPrice = ({ options, selectedSize }) => {
  const selectedOption = options.find((option) => option.size === selectedSize);

  return (
    <div className="mt-1 flex flex-row gap-2 text-lg font-semibold">
      <span>${selectedOption ? selectedOption.price : 0}</span>
    </div>
  );
};

export default MealPrice;
