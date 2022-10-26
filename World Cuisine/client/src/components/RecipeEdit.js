import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import { getRecipeById, UpdateRecipe } from "../modules/recipeManager"
import { Form, FormGroup, Label, Input } from "reactstrap"


export const RecipeEdit = () => {
    const { recipeId } = useParams()
    const navigate = useNavigate()

    const [currentRecipe, setCurrentRecipe] = useState({});
    const [updatedRecipe, setUpdatedRecipe] = useState({
        id: recipeId,
        Name: "",
        Description: "",
        ImageUrl: "",
        Ingredient: "",
        Instruction: ""
    })

    const getCurrentRecipe = () => {
        getRecipeById(recipeId)
            .then((recipe) => {
                setCurrentRecipe(recipe)
            })
    }

    useEffect(() => {
        getCurrentRecipe()
    }, [])

    const handleEditButtonClick = (event) => {
        event.preventDefault();
        UpdateRecipe(updatedRecipe)
            .then(() => {
                navigate("/recipe")
            })
    }

    return (
        <Form>
            <FormGroup>
                <Label for="name">Recipe Name</Label>
                <Input
                    id="name"
                    type="text"
                    value={updatedRecipe.name}
                    onChange={
                        (evt) => {
                            let copy = { ...updatedRecipe }
                            copy.Name = evt.target.value
                            setUpdatedRecipe(copy)
                        }
                    } />
            </FormGroup>
            <FormGroup>
                <Label for="description">Recipe Description</Label>
                <Input
                    id="description"
                    type="text"
                    placeholder={currentRecipe.description}
                    onChange={(evt) => {
                        let copy = { ...updatedRecipe }
                        copy.Description = evt.target.value
                        setUpdatedRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="imageUrl">Image Url</Label>
                <Input
                    id="imageUrl"
                    type="text"
                    placeholder={currentRecipe.imageUrl}
                    onChange={(evt) => {
                        let copy = { ...updatedRecipe }
                        copy.ImageUrl = evt.target.value
                        setUpdatedRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="ingredient">Recipe Ingredients</Label>
                <Input
                    id="ingredient"
                    type="textarea"
                    placeholder={currentRecipe.ingredient}
                    onChange={(evt) => {
                        let copy = { ...updatedRecipe }
                        copy.Ingredient = evt.target.value
                        setUpdatedRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="instruction">Recipe Instructions</Label>
                <Input
                    id="instruction"
                    type="textarea"
                    placeholder={currentRecipe.instruction}
                    onChange={(evt) => {
                        let copy = { ...updatedRecipe }
                        copy.Instruction = evt.target.value
                        setUpdatedRecipe(copy)
                    }} />
            </FormGroup>

            <Button className="btn btn-primary" onClick={(clickEvent) => handleEditButtonClick(clickEvent)}>Save</Button>
            <Button className="btn btn-primary" onClick={() => { navigate("/recipe") }}>Cancel</Button>
        </Form>
    )
}