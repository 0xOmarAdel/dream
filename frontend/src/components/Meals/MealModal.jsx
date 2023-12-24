import MealDescription from "./MealDescription";
import MealImage from "./MealImage";
import MealTitle from "./MealTitle";
import MealRating from "./MealRating";

const MealModal = ({ title, description, image }) => {
  // api call here to get the meal reviews

  return (
    <dialog id="meal_modal" className="modal modal-middle">
      <div className="modal-box max-w-[40rem]">
        <div className="grid grid-cols-2 gap-7">
          <div className="col-span-1">
            <MealImage image={image} />
          </div>
          <div className="col-span-1 flex flex-col gap-1">
            <MealTitle title={title} classes="m-0 text-2xl" />
            <div className="flex flex-row items-center gap-2">
              <MealRating />
              <span className="text-[15px] text-gray-600 font-medium translate-y-0.5">
                View reviews
              </span>
            </div>
            <MealDescription description={description} />
          </div>
        </div>

        <div className="mt-8 flex flex-row-reverse gap-3">
          <button className="btn">Add to cart</button>
          <form method="dialog">
            <button className="btn">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default MealModal;
