import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const MenuPagination = ({
  currentPage,
  setCurrentPage,
  totalMeals,
  totalPages,
}) => {
  const numPagesToShow = 5;
  const pageNumbers = Array.from(
    { length: numPagesToShow },
    (_, index) => currentPage - 2 + index
  );

  return (
    <div className="flex items-center justify-center mt-4 font-medium">
      {currentPage > 1 && (
        <button
          className="mr-2 px-4 py-2 bg-primary text-white rounded-full focus:outline-none hover:bg-sky-600"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
      )}
      {pageNumbers.map(
        (pageNumber) =>
          pageNumber >= 1 &&
          pageNumber <= totalPages && (
            <button
              key={pageNumber}
              className={`mr-2 px-4 py-2 ${
                pageNumber === currentPage
                  ? "bg-sky-500 text-white rounded-full focus:outline-none hover:bg-sky-600"
                  : "bg-gray-200 text-gray-700 rounded-full focus:outline-none hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
      )}
      {currentPage < totalPages && (
        <button
          className="px-4 py-2 bg-sky-500 text-white rounded-full focus:outline-none hover:bg-sky-600"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      )}
    </div>
  );
};

export default MenuPagination;
