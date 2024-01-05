const MenuSearch = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className="w-full px-3 py-2 bg-white border outline-none rounded-md transition duration-300 focus:border-primary"
      placeholder="Search.."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default MenuSearch;
