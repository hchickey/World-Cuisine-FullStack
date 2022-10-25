import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addRecipe } from "../modules/recipeManager";


export const RecipeAddForm = () => {
    const navigate = useNavigate();

    const emptyRecipe = {
        name: "",
        description: "",
        imageUrl: "",
        userId: 0,
        ingredient: "",
        instruction: "",
    };

    const [recipe, setRecipe] = useState(emptyRecipe);

    const handleInputChange = (e) => {
        const value = e.target.value;
        const key = e.target.id;

        const recipeCopy = { ...recipe };

        recipeCopy[key] = value;
        setRecipe(recipeCopy);
    };

    const save = (e) => {
        e.preventDefault();

        addRecipe(recipe).then((r) => {
            navigate("/recipe");
        });
    };

    return (
        <Form>
            <FormGroup>
                <Label for="name">Recipe Name</Label>
                <Input
                    id="name"
                    type="text"
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Recipe Description</Label>
                <Input
                    id="description"
                    type="text"
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="imageUrl">Image Url</Label>
                <Input
                    id="imageUrl"
                    type="text"
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="userId">User Id</Label>
                <Input
                    id="userId"
                    type="number"
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="ingredient">Recipe Ingredients</Label>
                <Input
                    id="ingredient"
                    type="textarea"
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="instruction">Recipe Instructions</Label>
                <Input
                    id="instruction"
                    type="textarea"
                    onChange={handleInputChange} />
            </FormGroup>

            <Button className="btn btn-primary" onClick={save}>Submit</Button>

        </Form>
    );
}