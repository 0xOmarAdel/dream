const WeeklyCard = ({ image, title, description }) => {
  return (
    <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto">
        <div className="p-4 sm:p-6">
          <div className="h-[236px] bg-cover bg-center bg-[url('https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/19/1/WU0311H_rib-eye-steak-with-onion-blue-cheese-sauce-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1382542189320.jpeg')]"></div>
          <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
            Steak with Cheese
          </p>
          <div className="flex flex-row">
            <p className="text-[17px] font-bold text-sky-500">Meat idk</p>
          </div>
          <p className="text-[#7C7C80] font-[15px] mt-2">
            Our shrimp sauce is made with mozarella, a creamy taste of shrimp
            with extra kick of spices.
          </p>
          <button className="block mt-6 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-sky-500 rounded-[14px] hover:bg-sky-600 focus:outline-none text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard;
