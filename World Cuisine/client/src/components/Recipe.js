import { Card, CardBody, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

export const Recipe = ({ recipe }) => {

    const navigate = useNavigate()

    const editClick = (e) => {
        e.preventDefault()
        navigate(`/recipe/edit/${recipe.id}`)
    }

    return (
        <Card>
            <p className="text-left px-2">Created by: {recipe.user.fullName}</p>
            <CardBody>
                <strong>{recipe.name}</strong>
                <p>{recipe.description}</p>
                <br />
                <strong>Ingredients:</strong>
                <p>{recipe.ingredient}</p>
                <br />
                <strong>Instructions:</strong>
                <p>{recipe.instruction}</p>
            </CardBody>
            <Button onClick={editClick}>Edit Recipe</Button>
        </Card>
    )
}