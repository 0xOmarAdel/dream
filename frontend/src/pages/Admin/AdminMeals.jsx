import { useEffect, useState } from "react";
import Meals from "../../components/Meals/Meals";
import useAxios from "../../hooks/useAxios";
import Loading from "../../ui/Loading";

const AdminMeals = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const { runAxios: fetchMeals, data: meals, loading } = useAxios("/meals");

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

    if (loading) return <Loading />;


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <input
            className="shadow appearance-none border rounded py-2 px-4 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search For Meals..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Meals meals={meals.meals} searchQuery={searchQuery} />
        </>
      )}
    </>
  );
};
export default AdminMeals;
