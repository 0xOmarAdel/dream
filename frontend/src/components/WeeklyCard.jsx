const WeeklyCard = ({ image, title, description, options, categoryName }) => {
  return (
    <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto">
        <div className="p-4 sm:p-6">
          <img src={image} />
          <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
            {title}
          </p>
          <div className="flex flex-row">
            <p className="text-[17px] font-bold text-sky-500">{categoryName}</p>
          </div>
          <p className="text-[#7C7C80] font-[15px] mt-2">{description}</p>
          <button className="block mt-6 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-sky-500 rounded-[14px] hover:bg-sky-600 focus:outline-none text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard;
