import { Link } from "react-router-dom";

function BookCard({ book }) {
  const { id, title, authors, formats } = book;

  // Gutendex usually provides image URLs in formats
  const cover = formats["image/jpeg"] || "";

  return (
    <div
      style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}
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
    </div>
  );
}

export default BookCard;
