import React from "react";
import { Link } from "react-router-dom";
const WeeklyCard = ({ image, title, description }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="Steak plate" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            to="/shop"
            className="btn btn-primary bg-sky-500 hover:bg-sky-500 text-white border-none"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard;
