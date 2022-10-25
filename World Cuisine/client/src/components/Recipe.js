import { Card, CardBody } from "reactstrap"


export const Recipe = ({ recipe }) => {
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
        </Card>
    )
}