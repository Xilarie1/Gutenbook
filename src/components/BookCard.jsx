import { Link } from "react-router-dom";

function BookCard({ book, removeFavorite }) {
  const { id, title, authors, formats } = book;

  const cover = formats["image/jpeg"] || "";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      {cover && (
        <img
          src={cover}
          alt={title}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      )}
      <h3>{title}</h3>
      {authors?.length > 0 && <p>By {authors.map((a) => a.name).join(", ")}</p>}
      <Link to={`/book/${id}`}>View Details</Link>

      {/* Remove button only shows if removeFavorite prop is passed */}
      {removeFavorite && (
        <button
          onClick={() => removeFavorite(id)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
}

export default BookCard;
