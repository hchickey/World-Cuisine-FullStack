import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { getCurrentUser } from "../../modules/authManager";
import { deleteRecipe, getRecipeById } from "../../modules/recipeManager";
import "./details.css"


export const RecipeDetails = () => {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [detail, setDetail] = useState({});
    const [currentUser, setCurrentUser] = useState({});

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const getDetails = (id) => {
        getRecipeById(id).then((recipe) => {
            setDetail({
                id: recipe.id,
                name: recipe.name,
                ingredient: recipe.ingredient,
                instruction: recipe.instruction,
                imageUrl: recipe.imageUrl,
                userId: recipe.userId
            });
        });
    };

    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                setCurrentUser(user)
            })
    }, [])

    useEffect(() => {
        getDetails(recipeId);
    }, []);


    const editClick = (e) => {
        e.preventDefault()
        navigate(`/recipe/edit/${detail.id}`)
    }

    const deleteButton = (id, nav) => {
        deleteRecipe(id).then(() => nav("/recipe"));
    }


    const updateButton = () => {

        if (currentUser.id !== detail.userId) {
            return ""
        }
        else {
            return <Button onClick={editClick}>Edit Recipe</Button>
        }
    }

    const authDeleteButton = () => {
        if (currentUser.id !== detail.userId) {
            return ""
        }
        else {
            return <Button onClick={toggle}>
                Delete Recipe
            </Button>
        }
    }


    return (
        <Card className="m-4">
            <h1 className="recipeDetails">Recipe Details</h1>
            <CardBody>
                <div className="container">
                    <div className="row justify-content-center">
                        <h2 className="nameDetails">{detail.name}</h2>
                        <br />
                        <Card>
                            <CardBody>
                                <strong className="ingredient">Ingredients:</strong>
                                <p className="ingredientDetails">{detail.ingredient}</p>
                            </CardBody>
                        </Card>
                        <br />
                        <Card>
                            <CardBody>
                                <strong className="instruction">Instructions:</strong>
                                <p className="instructionDetails">{detail.instruction}</p>
                            </CardBody>
                        </Card>
                        <br />
                    </div>
                    <br />
                    <img className="recipeImage" alt="country" src={detail.imageUrl} />
                </div>
                {currentUser.id && detail.userId ? <>
                    <div className="editButton">{updateButton()}</div>
                    <div className="deleteButton">{authDeleteButton()}</div>
                </> : ""}
            </CardBody>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete Recipe</ModalHeader>
                <ModalBody>
                    <>
                        <section>
                            <div>{detail.name}</div>
                        </section>
                    </>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        CANCEL
                    </Button>
                    <Button color="secondary" onClick={() => { deleteButton(detail.id, navigate) }}>
                        CONFIRM
                    </Button>
                </ModalFooter>
            </Modal>
        </Card>
    )
}