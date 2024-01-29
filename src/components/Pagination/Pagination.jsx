import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  handlePageClick,
  handleNextPage,
  handlePreviousPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        className={styles.arrow}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              key={index}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
