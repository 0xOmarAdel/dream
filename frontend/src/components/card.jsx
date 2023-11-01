import img from "../assets/steak.jpg";
const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="Steak plate" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Steak</h2>
        <p>Grilled beef steak and potatoes on plate.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-sky-500 hover:bg-sky-500 text-white border-none">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
