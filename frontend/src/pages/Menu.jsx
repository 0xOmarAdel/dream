import Banner from "../layout/Banner";
import Meals from "../components/Meals/Meals";
import MenuFilters from "../components/MenuFilters/MenuFilters";

const Menu = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <div className="px-20 grid grid-cols-5 gap-10">
        <MenuFilters />
        <div className="col-span-4">
          <Meals />
        </div>
      </div>
    </div>
  );
};

export default Menu;
