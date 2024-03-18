import React from "react";
import { usePagination, DOTS } from "../../components/hook/usePagination";
import "./Pagination.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  }) || [];

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <>
      <div className="pagination-container text-black">
        <button
          className=" px-1 py-1 leading-tight  bg-[#FFFFFF] rounded-lg text-black text-xl    "
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          {/* <div className="text-white">{"<"}</div> */}
          {/* {"<"} */}
          <GrFormPrevious size={25} />
        </button>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <li key={index}>&#8230;</li>;
          }

          return (
            <button
              key={index}
              className={`pagination-button  ${
                pageNumber === currentPage ? "active" : "null"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className=" px-1 py-1  leading-tight  bg-[#FFFFFF] rounded-lg text-black text-xl    "
          disabled={currentPage === lastPage}
          onClick={onNext}
        >
          {/* <div className="text-white">{">"}</div> */}
          {/* {">"} */}
          <GrFormNext size={25} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
