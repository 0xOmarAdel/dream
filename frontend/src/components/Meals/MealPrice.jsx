const MealPrice = ({ options }) => {
  const maxPrice = Math.max(...options.map((option) => option.price));
  const minPrice = Math.min(...options.map((option) => option.price));
  return (
    <div className="mt-1 flex flex-row gap-2 text-lg font-semibold">
      <span>${minPrice}</span>
      <span>-</span>
      <span>${maxPrice}</span>
    </div>
  );
};

export default MealPrice;
