import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./RecipeCard.module.css";
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
                    <img src="/Users/kendellandrews/specalization/react-proj-3/starter/src/assets/salad.webp" alt="" />
                </div>
                <h3>{recipe.recipe_name}</h3>
            </div>
            <button className="blue-btn" onClick={handleClick}>See More</button>
        </div>
    );
};

export default RecipeCard
    