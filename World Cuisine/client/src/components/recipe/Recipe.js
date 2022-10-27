import { Card, CardBody, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

export const Recipe = ({ recipe }) => {

    const navigate = useNavigate()

    const detailClick = (e) => {
        e.preventDefault()
        navigate(`/recipe/${recipe.id}`)
    }

    return (
        <Card>
            <p className="text-left px-2">Created by: {recipe.user.fullName}</p>
            <CardBody>
                <h2><strong>{recipe.name}</strong></h2>
                <p>{recipe.description}</p>
            </CardBody>
            <Button onClick={detailClick}>Recipe Details</Button>
        </Card>
    )
}