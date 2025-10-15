import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  const categories = ["Fiction", "Science", "History", "Fantasy", "Philosophy"];

  return (
    <header style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
      <h1>Book App</h1>

      {/* Main navigation */}
      <nav style={{ marginTop: "0.5rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/favorites" style={{ marginRight: "1rem" }}>
          Favorites
        </Link>
      </nav>

      {/* Search bar */}
      <SearchBar />

      {/* Category menu */}
      <nav style={{ marginTop: "0.5rem" }}>
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${cat.toLowerCase()}`}
            style={{ marginRight: "1rem" }}
          >
            {cat}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
