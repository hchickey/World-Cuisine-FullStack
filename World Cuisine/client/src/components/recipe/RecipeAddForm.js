import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addRecipe, getAllRecipes } from "../../modules/recipeManager";
import { useNavigate } from "react-router-dom";

export const RecipeAddForm = () => {

    const navigate = useNavigate();

    const emptyRecipe = {
        Name: "",
        Description: "",
        ImageUrl: "",
        UserId: 0,
        Ingredient: "",
        Instruction: "",
    };

    const [recipe, setRecipe] = useState(emptyRecipe);

    const handleCreateButtonClick = (e) => {
        e.preventDefault()
        const recipeToSendToApi = {
            Name: recipe.Name,
            Description: recipe.Description,
            ImageUrl: recipe.ImageUrl,
            UserId: recipe.UserId,
            Ingredient: recipe.Ingredient,
            Instruction: recipe.Instruction
        }

        return addRecipe(recipeToSendToApi)
            .then(getAllRecipes())
            .then(navigate("/recipe"))
    }

    return (
        <Form>
            <FormGroup>
                <Label for="name">Recipe Name</Label>
                <Input
                    id="name"
                    type="text"
                    onChange={(evt) => {
                        let copy = { ...recipe }
                        copy.Name = evt.target.value
                        setRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Recipe Description</Label>
                <Input
                    id="description"
                    type="text"
                    onChange={(evt) => {
                        let copy = { ...recipe }
                        copy.Description = evt.target.value
                        setRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="imageUrl">Image Url</Label>
                <Input
                    id="imageUrl"
                    type="text"
                    onChange={(evt) => {
                        let copy = { ...recipe }
                        copy.ImageUrl = evt.target.value
                        setRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="userId">User Id</Label>
                <Input
                    id="userId"
                    type="number"
                    onChange={(evt) => {
                        let copy = { ...recipe }
                        copy.UserId = evt.target.value
                        setRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="ingredient">Recipe Ingredients</Label>
                <Input
                    id="ingredient"
                    type="textarea"
                    onChange={(evt) => {
                        let copy = { ...recipe }
                        copy.Ingredient = evt.target.value
                        setRecipe(copy)
                    }} />
            </FormGroup>
            <FormGroup>
                <Label for="instruction">Recipe Instructions</Label>
                <Input
                    id="instruction"
                    type="textarea"
                    onChange={(evt) => {
                        let copy = { ...recipe }
                        copy.Instruction = evt.target.value
                        setRecipe(copy)
                    }} />
            </FormGroup>

            <Button className="btn btn-primary" onClick={(clickEvent) => { handleCreateButtonClick(clickEvent) }}>Submit</Button>

        </Form>
    );
}