/* "use client";
import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-end mt-4">
      <nav>
        <ul className="pagination">
          {[...Array(totalPages).keys()].map((page) => (
            <li
              key={page + 1}
              className={`page-item ${
                currentPage === page + 1 ? "active" : ""
              }`}
            >
              <button
                onClick={() => handlePageChange(page + 1)}
                className="page-link"
              >
                {page + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
 */

import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPages = 5; // Maximum number of pages to show
    const maxAdjacentPages = Math.floor((maxPages - 1) / 2); // Number of pages to show on each side of the current page

    if (totalPages <= maxPages) {
      // If total pages are less than or equal to the maximum, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If total pages exceed the maximum, show a subset of pages with ellipsis
      const startPage = Math.max(currentPage - maxAdjacentPages, 1);
      const endPage = Math.min(currentPage + maxAdjacentPages, totalPages);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className=" flex justify-end mt-4" >
      <nav>
        <ul className="pagination">
          {getPageNumbers().map((page, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <button
                onClick={() => handlePageChange(page)}
                className="page-link"
              >
                {page === "..." ? page : page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
