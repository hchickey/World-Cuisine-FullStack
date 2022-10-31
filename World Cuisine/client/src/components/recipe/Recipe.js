import { Card, CardBody, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

export const Recipe = ({ recipe }) => {

    const navigate = useNavigate()

    const Countries = () => {
        return <ul>
            {
                recipe?.countries?.map((country) => {
                    return <li key={country?.id}>{country?.country?.name}</li>
                })
            }
        </ul>
    }

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
                <div>Countries associated with Recipe: {Countries()}</div>
            </CardBody>
            <Button onClick={detailClick}>Recipe Details</Button>
        </Card>
    )
}