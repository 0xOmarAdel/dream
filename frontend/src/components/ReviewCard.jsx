import React from "react";

const ReviewCard = ({ Rating, comment }) => {
  return (
    <div className="card w-64 bg-gray-100 shadow-xl">
      <h2 className="card-title mx-auto mt-2 text-black ">{Rating}</h2>
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src="https://cdn-icons-png.flaticon.com/512/6386/6386976.png" />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-black">{comment}</p>
        <div className="card-actions">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
