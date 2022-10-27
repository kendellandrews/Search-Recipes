import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2>Devmountain Eatery</h2>
      <div >
        <nav>
            <Link to="">
              <button className="navBtns">Home</button>
            </Link>
            <Link to="/newRecipe">
              <button className="navBtns">Add Recipe</button>
            </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
