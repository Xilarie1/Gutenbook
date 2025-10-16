// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import "./Header.css";

// function Header() {
//   const categories = [
//     "Fiction",
//     "Mystery",
//     "Thriller",
//     "Romance",
//     "Fantasy",
//     "Morality",
//     "Society",
//     "Power",
//     "Justice",
//     "Adventure",
//     "Tragedy",
//     "War",
//     "Philosophy",
//   ];

//   return (
//     <header className="header">
//       <h1>Book App</h1>

//       <nav className="main-nav">
//         <Link to="/">Home</Link>
//         <Link to="/favorites">Favorites</Link>
//       </nav>

//       <SearchBar />

//       <nav className="category-nav">
//         {categories.map((cat) => (
//           <Link key={cat} to={`/category/${cat.toLowerCase()}`}>
//             {cat}
//           </Link>
//         ))}
//       </nav>
//     </header>
//   );
// }

// export default Header;
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
      <div className="header-top">
        <h1>Book App</h1>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </div>

      <SearchBar />

      {/* Category dropdown */}
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
    </header>
  );
}

export default Header;
