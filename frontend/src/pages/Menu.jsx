import Banner from "../layout/Banner";
import Meals from "../components/Meals/Meals";
import MenuFilters from "../components/MenuFilters/MenuFilters";
import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Loading from "../ui/Loading";
import { useSearchParams } from "react-router-dom";
import useEffectExceptFirstRender from "../hooks/useEffectExceptFirstRender";

const Menu = () => {
  const [selectedMinPrice, setSelectedMinPrice] = useState(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const [queryStrings, setQueryStrings] = useState(null);

  const {
    runAxios: fetchMeals,
    data: meals,
    loading,
  } = useAxios("/meals", "GET", null, queryStrings);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryParamsNames = [
      "minPrice",
      "maxPrice",
      "category",
      "size",
      "rating",
    ];

    queryParamsNames.forEach((paramName) => {
      const paramValue = searchParams.get(paramName);

      switch (paramName) {
        case "minPrice":
          setSelectedMinPrice(paramValue ? parseInt(paramValue) : null);
          break;
        case "maxPrice":
          setSelectedMaxPrice(paramValue ? parseInt(paramValue) : null);
          break;
        case "category":
          setSelectedCategories(paramValue ? [paramValue] : []);
          break;
        case "size":
          setSelectedSizes(paramValue ? [paramValue] : []);
          break;
        case "rating":
          setSelectedRatings(paramValue ? [parseInt(paramValue)] : []);
          break;
        default:
          break;
      }
    });

    let updatedQueryStrings = "";

    queryParamsNames.forEach((paramName) => {
      const paramValue = searchParams.get(paramName);

      updatedQueryStrings += `${
        paramValue !== null ? `&${paramName}=${paramValue}` : ""
      }`;
    });

    setQueryStrings(
      updatedQueryStrings.startsWith("&")
        ? updatedQueryStrings.slice(1)
        : updatedQueryStrings
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffectExceptFirstRender(() => {
    fetchMeals();
  }, [fetchMeals, queryStrings]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-10">
      <Banner
        title="menu page"
        breadcrumbs={[{ text: "home", path: "/" }, { text: "menu" }]}
      />
      <div className="px-20 grid grid-cols-5 gap-10">
        <div className="col-span-1">
          <MenuFilters
            selectedMinPrice={selectedMinPrice}
            selectedMaxPrice={selectedMaxPrice}
            selectedCategories={selectedCategories}
            selectedSizes={selectedSizes}
            selectedRatings={selectedRatings}
            setSelectedMinPrice={setSelectedMinPrice}
            setSelectedMaxPrice={setSelectedMaxPrice}
            setSelectedCategories={setSelectedCategories}
            setSelectedSizes={setSelectedSizes}
            setSelectedRatings={setSelectedRatings}
            setQueryStrings={setQueryStrings}
          />
        </div>
        <div className="col-span-4">
          <Meals meals={meals} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
