import MealImage from "./MealImage";

const MealModal = ({ title, description, image }) => {
  // api call here to get the meal reviews

  return (
    <dialog id="meal_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3>{title}</h3>
        <p>{description}</p>
        <MealImage image={image} />
        <div className="flex flex-row-reverse gap-3">
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
