import { useState } from "react";
import "./Nav.css";
import Search from "../Search/Search";
import { Link } from "react-scroll";

function Nav({ handleSearch = () => {}, hasSearch = true }) {
  const [search, setSearch] = useState("");

  if (hasSearch) {
    handleSearch(search);
  }

  return (
    <nav className="nav-bar">
      <a className="nav-link nav-title" href="/">
        Logo
      </a>

      {hasSearch ? <Search search={search} setSearch={setSearch} /> : null}

      {hasSearch ? (
        <Link
          className="nav-link btn"
          to="user-form"
          smooth={true}
          duration={500}
        >
          Add User
        </Link>
      ) : null}
    </nav>
  );
}

export default Nav;
