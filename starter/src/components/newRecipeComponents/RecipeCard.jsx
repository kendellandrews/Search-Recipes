import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    return (
        <div className="recipe-div">
            <div>
                <div className="recipe-card">
                    <img id="imgSld" src="src/assets/salad.webp" alt="" />
                </div>
                <h3>{recipe.recipe_name}</h3>
            <button className="seeMoreBtn" onClick={handleClick}>See More</button>
            </div>
        </div>
    );
};

export default RecipeCard
    