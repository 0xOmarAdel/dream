import img from "../assets/staek.jpg";
const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="Steak plate" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Steak</h2>
        <p>grilled beef steak and potatoes on plate.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
