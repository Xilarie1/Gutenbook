import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Header.css";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Fantasy",
    "Morality",
    "Society",
    "Power",
    "Justice",
    "Adventure",
    "Tragedy",
    "War",
    "Philosophy",
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header-left">
        <h1>Book App</h1>
      </div>

      {/* Center: Main nav */}
      <nav className="header-center">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>

      {/* Right: SearchBar + Category Dropdown */}
      <div className="header-right">
        <SearchBar />
        <div className="category-dropdown">
          <button className="category-toggle" onClick={toggleDropdown}>
            Categories ▼
          </button>
          {dropdownOpen && (
            <ul className="category-menu">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/category/${cat.toLowerCase()}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
