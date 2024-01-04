import Banner from "../layout/Banner";
import Meals from "../components/Meals/Meals";
import MenuFilters from "../components/MenuFilters/MenuFilters";
import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Loading from "../ui/Loading";
import { useSearchParams } from "react-router-dom";
import useEffectExceptFirstRender from "../hooks/useEffectExceptFirstRender";
import Section from "../ui/Section";
import { CiFilter } from "react-icons/ci";

const Menu = () => {
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="flex flex-col">
      <Banner
        title="menu page"
        breadcrumbs={[{ text: "home", path: "/" }, { text: "menu" }]}
      />
      <Section classes="relative grid grid-cols-5 gap-10">
        <button
          onClick={() => setShowFilters((prevState) => !prevState)}
          className="fixed right-8 sm:right-10 md:right-16 bottom-8 sm:bottom-10 md:bottom-16 z-[60] p-2 bg-primary rounded-full text-2xl text-gray-200 lg:hidden"
        >
          <CiFilter />
        </button>
        <div
          className={`absolute lg:static top-0 z-50 h-full w-full px-10 sm:px-28 md:px-36 py-12 lg:p-0 bg-gray-50 lg:bg-transparent ${
            showFilters ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:col-span-1 transition duration-500`}
        >
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
        <div className="col-span-5 lg:col-span-4">
          <Meals meals={meals} />
        </div>
      </Section>
    </div>
  );
};

export default Menu;
