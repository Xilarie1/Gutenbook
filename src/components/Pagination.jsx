import React, { useState, useEffect } from "react";
import "./Pagination.css";

function Pagination({ page, totalPages, onPageChange }) {
  const [inputPage, setInputPage] = useState(page);

  // Keep inputPage in sync if page changes externally
  useEffect(() => {
    setInputPage(page);
  }, [page]);

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleJump = () => {
    const num = Number(inputPage);
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      onPageChange(num);
    } else {
      setInputPage(page); // reset if invalid
    }
  };

  if (totalPages <= 1) return null;

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
        Page{" "}
        <input
          type="number"
          min={1}
          max={totalPages}
          value={inputPage}
          onChange={handleInputChange}
          onBlur={handleJump} // Jump when input loses focus
          onKeyDown={(e) => e.key === "Enter" && handleJump()} // Jump on Enter
          className="pagination-input"
        />{" "}
        of {totalPages}
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
