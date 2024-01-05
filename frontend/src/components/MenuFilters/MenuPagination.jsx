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
    <div className="join">
      {currentPage > 1 && (
        <button
          className="join-item btn"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt;&lt;
        </button>
      )}
      {pageNumbers.map(
        (pageNumber) =>
          pageNumber >= 1 &&
          pageNumber <= totalPages && (
            <button
              key={pageNumber}
              className={`join-item btn ${
                pageNumber === currentPage ? "btn-active" : ""
              }`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
      )}
      {currentPage < totalPages && (
        <button
          className="join-item btn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;&gt;
        </button>
      )}
    </div>
  );
};

export default MenuPagination;
