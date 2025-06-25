import { useState } from "react";
import "../../style/pagination/pagination.css";

const allItems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

function Pagination() {
  const [currentPage, setCurrentPage] = useState(10);
  const [btnShow, setBtnShow] = useState(true);

  const handleDownload = () => {
    setCurrentPage((prev) => prev + 10);

    if (currentPage === 40) {
      setBtnShow(false);
    }
  };

  const visibleItems = allItems.slice(0, currentPage);

  return (
    <div id="pagination">
      <ul className="paginationList">
        {visibleItems.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
      {btnShow && (
        <button type="button" onClick={handleDownload}>
          Завантажити ще
        </button>
      )}
    </div>
  );
}

export default Pagination;
