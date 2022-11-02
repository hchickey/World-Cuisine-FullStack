import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { getAllRecipesWithCountries } from "../../modules/recipeManager";
import { Recipe } from "./Recipe";


export const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    const getRecipes = () => {
        getAllRecipesWithCountries().then(setRecipes);
    }

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/recipe/add")
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            <Button onClick={handleClick}>Create Recipe</Button>
            <div className="container">
                <div className="row justify-content-center">
                    {recipes.map((recipe) => (
                        <Recipe recipe={recipe} key={recipe.id}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}