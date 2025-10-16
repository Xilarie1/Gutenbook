import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Header.css";

function Header() {
  const categories = ["Fiction", "Science", "History", "Fantasy", "Philosophy"];

  return (
    <header className="header">
      <h1>Book App</h1>

      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>

      <SearchBar />

      <nav className="category-nav">
        {categories.map((cat) => (
          <Link key={cat} to={`/category/${cat.toLowerCase()}`}>
            {cat}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
