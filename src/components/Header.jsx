import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
      <h1>Book App</h1>
      <nav style={{ marginTop: "0.5rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/favorites" style={{ marginRight: "1rem" }}>
          Favorites
        </Link>
      </nav>

      {/* Optional category menu */}
      {/* <CategoryMenu /> */}
    </header>
  );
}

export default Header;
