import React from "react";
import "./Pagination.css";

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; // hide if only 1 page

  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="pagination-button"
      >
        Previous
      </button>

      <span className="pagination-info">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
