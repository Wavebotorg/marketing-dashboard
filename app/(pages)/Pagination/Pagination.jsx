"use client"
import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
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
              className={`page-item ${currentPage === page + 1 ? "active" : ""}`}
            >
              <button onClick={() => handlePageChange(page + 1)} className="page-link">
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
