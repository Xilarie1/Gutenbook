import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ book, removeFavorite }) {
  const { id, title, authors, formats, summaries } = book;
  const cover = formats["image/jpeg"] || "";

  return (
    <div className="bookcard-container">
      {cover && <img src={cover} alt={title} className="bookcard-cover" />}

      {/* Main content */}
      <div className="bookcard-content">
        <h3>{title}</h3>
        {authors?.length > 0 && (
          <p>By {authors.map((a) => a.name).join(", ")}</p>
        )}
        {summaries?.length > 0 && (
          <p className="bookcard-summary">
            {summaries[0].slice(0, 100)}
            {summaries[0].length > 100 ? "..." : ""}
          </p>
        )}
      </div>

      {/* Footer stays at the bottom */}
      <div className="bookcard-footer">
        <Link to={`/book/${id}`}>View Details</Link>
        {removeFavorite && (
          <button
            className="bookcard-remove-btn"
            onClick={() => removeFavorite(id)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default BookCard;
