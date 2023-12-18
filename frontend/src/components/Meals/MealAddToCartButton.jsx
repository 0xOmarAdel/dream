import {IoCartOutline} from 'react-icons/io5';

const MealAddToCartButton = () => {
  return (
<button className="btn btn-outline btn-primary w-full min-h-fit h-fit mt-3 py-2">
        <IoCartOutline className="text-lg" />
        Add to cart
      </button>  );
};

export default MealAddToCartButton;