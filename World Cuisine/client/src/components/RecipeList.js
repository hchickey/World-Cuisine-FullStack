import { useEffect, useState } from "react"
import { getAllRecipes } from "../modules/recipeManager";
import { Recipe } from "./Recipe";


export const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {
        getAllRecipes().then(recipes => setRecipes(recipes));
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {recipes.map((recipe) => (
                        <Recipe recipe={recipe} key={recipe.id} />
                    ))}
                </div>
            </div>
        </>
    )
}