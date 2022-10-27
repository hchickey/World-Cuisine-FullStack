import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Button, Card, CardBody } from "reactstrap";
import { getRecipeById } from "../../modules/recipeManager";



export const RecipeDetails = () => {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [detail, setDetail] = useState({});

    const getDetails = (id) => {
        getRecipeById(id).then((recipe) => {
            setDetail(recipe);
        });
    };

    useEffect(() => {
        getDetails(recipeId);
    }, []);

    const editClick = (e) => {
        e.preventDefault()
        navigate(`/recipe/edit/${detail.id}`)
    }

    return (
        <Card className="m-4">
            <h1>Recipe Details</h1>
            <CardBody>
                <div className="container">
                    <div className="row justify-content-center">
                        <h2>{detail.name}</h2>
                        <br />
                        <strong>Ingredients:</strong>
                        <p>{detail.ingredient}</p>
                        <br />
                        <strong>Instructions:</strong>
                        <p>{detail.instruction}</p>
                    </div>
                </div>
            </CardBody>
            <Button onClick={editClick}>Edit Recipe</Button>
        </Card>
    )
}