// /* "use client";
// import React from "react";

// const Pagination = ({
//   totalItems,
//   itemsPerPage,
//   currentPage,
//   onPageChange,
// }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (page) => {
//     onPageChange(page);
//   };

//   return (
//     <div className="flex justify-end mt-4">
//       <nav>
//         <ul className="pagination">
//           {[...Array(totalPages).keys()].map((page) => (
//             <li
//               key={page + 1}
//               className={`page-item ${
//                 currentPage === page + 1 ? "active" : ""
//               }`}
//             >
//               <button
//                 onClick={() => handlePageChange(page + 1)}
//                 className="page-link"
//               >
//                 {page + 1}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Pagination;
//  */

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

// import React from "react";
// import { usePagination, DOTS } from "../../components/hook/usePagination";
// import "./Pagination.css";
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// const Pagination = (props) => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize,
//   });

//   if (currentPage === 0 || paginationRange?.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[paginationRange.length - 1];

//   return (
//     <>
//       <div className="pagination-container text-black">
//         <button
//           className=" px-1 py-1 leading-tight  bg-[#FFFFFF] rounded-lg text-black text-xl    "
//           disabled={currentPage === 1}
//           onClick={onPrevious}
//         >
//           {/* <div className="text-white">{"<"}</div> */}
//           {/* {"<"} */}
//           <GrFormPrevious size={25} />
//         </button>
//         {paginationRange.map((pageNumber, index) => {
//           if (pageNumber === DOTS) {
//             return <li key={index}>&#8230;</li>;
//           }

//           return (
//             <button
//               key={index}
//               className={`pagination-button  ${
//                 pageNumber === currentPage ? "active" : "null"
//               }`}
//               onClick={() => onPageChange(pageNumber)}
//             >
//               {pageNumber}
//             </button>
//           );
//         })}
//         <button
//           className=" px-1 py-1  leading-tight  bg-[#FFFFFF] rounded-lg text-black text-xl    "
//           disabled={currentPage === lastPage}
//           onClick={onNext}
//         >
//           {/* <div className="text-white">{">"}</div> */}
//           {/* {">"} */}
//           <GrFormNext size={25} />
//         </button>
//       </div>
//     </>
//   );
// };

// export default Pagination;
