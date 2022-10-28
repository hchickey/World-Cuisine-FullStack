import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addRecipe, getAllRecipes } from "../../modules/recipeManager";
import { useNavigate } from "react-router-dom";
import { getAllCountries } from "../../modules/countryManager";

export const RecipeAddForm = () => {

    const navigate = useNavigate();

    const emptyRecipe = {
        Name: "",
        Description: "",
        ImageUrl: "",
        UserId: 0,
        Ingredient: "",
        Instruction: "",
        Countries: 0
    };

    const [recipe, setRecipe] = useState(emptyRecipe);
    const [countries, setCountry] = useState([]);

    const getCountries = () => {
        getAllCountries().then(countries => setCountry(countries));
    }

    useEffect(() => {
        getCountries();
    }, [])

    const handleCreateButtonClick = (e) => {
        e.preventDefault()

        const countryToSend = {
            Name: recipe.Countries.Name
        }

        const recipeToSendToApi = {
            Name: recipe.Name,
            Description: recipe.Description,
            ImageUrl: recipe.ImageUrl,
            UserId: recipe.UserId,
            Ingredient: recipe.Ingredient,
            Instruction: recipe.Instruction,
            Countries: recipe.Countries
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
            <FormGroup>
                <Label for="countries">Country</Label>
                <select
                    onChange={
                        (event) => {
                            const copy = { ...recipe }
                            copy.Countries = event.target.value
                            setRecipe(copy)
                        }
                    }>
                    <option value={0}>Select...</option>
                    {countries.map(
                        (country) => {
                            return (
                                <option key={country.id} value={country.id}>
                                    {country?.name}
                                </option>
                            )
                        }
                    )}
                </select>
            </FormGroup>

            <Button className="btn btn-primary" onClick={(clickEvent) => { handleCreateButtonClick(clickEvent) }}>Submit</Button>

        </Form>
    );
}