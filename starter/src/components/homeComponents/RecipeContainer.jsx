import React, { useState } from "react";
import RecipeCard from "../newRecipeComponents/RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";

const RecipeContainer = ({recipes}) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}/>
    })

  return (
    <section className="recipeSection">
      <h2>Search a recipe!</h2>
      <span className="searchBar">
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className="recipeContainer">
        {recipeDisplay ? recipeDisplay : <h2>No Recipes :(</h2>}
      </div>
    </section>
  );
};

export default RecipeContainer;
