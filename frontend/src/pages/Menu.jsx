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
import MenuPagination from "../components/MenuFilters/MenuPagination";
import queryString from "query-string";

const Menu = () => {
  const [showFilters, setShowFilters] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const [selectedMinPrice, setSelectedMinPrice] = useState(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const [page, setPage] = useState(1);

  const [queryStrings, setQueryStrings] = useState(null);

  const {
    runAxios: fetchMeals,
    data,
    loading,
  } = useAxios("/meals", "GET", null, queryStrings);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParamsNames = [
      "search",
      "minPrice",
      "maxPrice",
      "category",
      "size",
      "rating",
      "page",
    ];

    queryParamsNames.forEach((paramName) => {
      const paramValue = searchParams.get(paramName);

      switch (paramName) {
        case "search":
          setSearchValue(paramValue || "");
          break;
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
        case "page":
          setPage(parseInt(paramValue) || 1);
          break;
        default:
          break;
      }
    });

    let updatedQueryStrings = "";

    queryParamsNames.forEach((paramName) => {
      const paramValue = searchParams.get(paramName);

      const lowercaseParamValue =
        typeof paramValue === "string" ? paramValue.toLowerCase() : paramValue;

      updatedQueryStrings += `${
        lowercaseParamValue !== null
          ? `&${paramName}=${lowercaseParamValue}`
          : ""
      }`;
    });

    if (!searchParams.get("page")) {
      setSearchParams({ page: 1 });
      updatedQueryStrings += "&page=1";
    }

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

  useEffect(() => {
    searchParams.set("page", page);
    setSearchParams(searchParams);

    setQueryStrings((prevState) => {
      const queryParams = queryString.parse(prevState) || {};
      queryParams.page = page;
      const updatedQueryString = queryString.stringify(queryParams);

      return updatedQueryString;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
          className={`fixed lg:sticky top-0 lg:top-12 z-50 h-full lg:h-fit w-full px-10 sm:px-28 md:px-36 py-12 lg:p-0 bg-gray-50 lg:bg-transparent overflow-auto lg:overflow-hidden ${
            showFilters ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:col-span-1 transition duration-500`}
        >
          <MenuFilters
            setShowFilters={setShowFilters}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            selectedMinPrice={selectedMinPrice}
            setSelectedMinPrice={setSelectedMinPrice}
            selectedMaxPrice={selectedMaxPrice}
            setSelectedMaxPrice={setSelectedMaxPrice}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            selectedRatings={selectedRatings}
            setSelectedRatings={setSelectedRatings}
            page={page}
            setPage={setPage}
            setQueryStrings={setQueryStrings}
          />
        </div>
        <div className="col-span-5 lg:col-span-4 flex flex-col items-center gap-10">
          <Meals meals={data.meals} />
          <MenuPagination
            currentPage={page}
            setCurrentPage={setPage}
            totalMeals={data.totalMeals}
            totalPages={data.totalPages}
          />
        </div>
      </Section>
    </div>
  );
};

export default Menu;
