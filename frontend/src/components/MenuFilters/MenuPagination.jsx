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
  const numPagesToShow = Math.min(totalPages, 5);

  const pageNumbers = Array.from(
    { length: numPagesToShow },
    (_, index) => currentPage - Math.floor(numPagesToShow / 2) + index
  );

  const entriesPerPage = 24;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalMeals);

  return (
    <div className="flex items-center justify-center flex-col mt-4 font-medium">
      <div>
        {currentPage > 1 && (
          <button
            className="mr-2 px-4 py-2 text-lg font-bold bg-primary text-white rounded-full focus:outline-none hover:bg-sky-600"
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
            className="px-4 py-2 bg-sky-500 text-white font-bold text-lg rounded-full focus:outline-none hover:bg-sky-600"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        )}
      </div>

      <div className="text-gray-600 mt-2">
        Showing {startEntry} to {endEntry} of {totalMeals} entries
      </div>
    </div>
  );
};

export default MenuPagination;
