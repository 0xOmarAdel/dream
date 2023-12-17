import Banner from "../layout/Banner";
import Meals from "../components/Meals";
import MenuFilters from "../components/MenuFilters";

const Menu = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <div className="px-20 grid grid-cols-5 gap-10">
        <MenuFilters />
        <div className="col-span-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl text-gray-800 font-semibold">Menu</h1>
          </div>
          <Meals />
        </div>
      </div>
    </div>
  );
};

export default Menu;
