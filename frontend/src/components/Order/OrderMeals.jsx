import OrderMeal from "./OrderMeal";

const OrderMeals = ({ meals }) => {
  return (
    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      {meals.map((meal) => (
        <OrderMeal key={meal._id} meal={meal} />
      ))}
    </div>
  );
};

export default OrderMeals;
