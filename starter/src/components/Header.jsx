import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
          <a href="/">
          <h2 className="fontTitle">Devmountain Eatery</h2>
          </a>

          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/newRecipe"> ADD RECIPE </a>
            </li>
          </ul>
          </nav>
    </header>
  );
};

export default Header;
