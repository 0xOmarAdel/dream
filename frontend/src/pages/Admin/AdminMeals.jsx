import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Meal from "../../components/Meals/Meal";
import Meals from "../../components/Meals/Meals";

const AdminMeals = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <input
        className="shadow appearance-none border rounded py-2 px-4 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search For Meals..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Meals searchQuery={searchQuery} />;
    </>
  );
};
export default AdminMeals;
