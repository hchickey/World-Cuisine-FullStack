import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import { getRecipeById, UpdateRecipe } from "../modules/recipeManager"
import { Form, FormGroup, Label, Input } from "reactstrap"


export const RecipeEdit = () => {
    const { recipeId } = useParams()
    const navigate = useNavigate();

    const [updatedRecipe, setUpdatedRecipe] = useState({
        id: recipeId,
        name: "",
        description: "",
        imageUrl: "",
        ingredient: "",
        instruction: ""
    })

    const getCurrentRecipe = () => {
        getRecipeById(recipeId)
            .then((recipe) => setUpdatedRecipe(recipe))
    }

    useEffect(() => {
        getCurrentRecipe()
    }, [])

    const handleEditButtonClick = (recipe) => {


        if (updatedRecipe.imageUrl === "") {
            updatedRecipe.imageUrl = null
        }

        // const recipeToSend = {
        //     Id: updatedRecipe.Id,
        //     Name: updatedRecipe.Name,
        //     Description: updatedRecipe.Description,
        //     ImageUrl: updatedRecipe.ImageUrl,
        //     Ingredient: updatedRecipe.Ingredient,
        //     Instruction: updatedRecipe.Instruction
        // }

        UpdateRecipe(recipe)
            .then(() => {
                navigate(`/recipe`)
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
                            copy.name = evt.target.value
                            setUpdatedRecipe(copy)
                        }
                    } />
            </FormGroup>
            <FormGroup>
                <Label for="description">Recipe Description</Label>
                <Input
                    id="description"
                    type="text"
                    value={updatedRecipe.description}
                    onChange={(evt) => {
                        let copy = { ...updatedRecipe }
                        copy.description = evt.target.value
                        setUpdatedRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="imageUrl">Image Url</Label>
                <Input
                    id="imageUrl"
                    type="text"
                    value={updatedRecipe.imageUrl}
                    onChange={(evt) => {
                        let copy = { ...updatedRecipe }
                        copy.imageUrl = evt.target.value
                        setUpdatedRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="ingredient">Recipe Ingredients</Label>
                <Input
                    id="ingredient"
                    type="textarea"
                    value={updatedRecipe.ingredient}
                    onChange={(evt) => {
                        let copy = { ...updatedRecipe }
                        copy.ingredient = evt.target.value
                        setUpdatedRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="instruction">Recipe Instructions</Label>
                <Input
                    id="instruction"
                    type="textarea"
                    value={updatedRecipe.instruction}
                    onChange={(evt) => {
                        let copy = { ...updatedRecipe }
                        copy.instruction = evt.target.value
                        setUpdatedRecipe(copy)
                    }} />
            </FormGroup>

            <Button className="btn btn-primary" onClick={() => handleEditButtonClick(updatedRecipe)}>Save</Button>
            <Button className="btn btn-primary" onClick={() => { navigate("/recipe") }}>Cancel</Button>
        </Form>
    )
}