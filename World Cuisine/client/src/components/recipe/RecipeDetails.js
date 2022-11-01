import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { getCurrentUser } from "../../modules/authManager";
import { deleteRecipe, getRecipeById } from "../../modules/recipeManager";



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
                userId: recipe.userId
            });
        });
    };

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

    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                setCurrentUser(user)
            })
    }, [])

    const updateButton = () => {

        if (currentUser.id === detail.userId) {
            return <Button onClick={editClick}>Edit Recipe</Button>
        }
        else {
            return ""
        }
    }

    const authDeleteButton = () => {
        if (currentUser.id === detail.userId) {
            return <button onClick={toggle}>
                Delete Recipe
            </button>
        }
        else {
            return ""
        }
    }

    return (
        <Card className="m-4">
            <h1>Recipe Details</h1>
            <CardBody>
                <div className="container">
                    <div className="row justify-content-center">
                        <h2>{detail.name}</h2>
                        <br />
                        <strong>Ingredients:</strong>
                        <p>{detail.ingredient}</p>
                        <br />
                        <strong>Instructions:</strong>
                        <p>{detail.instruction}</p>
                    </div>
                </div>
            </CardBody>
            <div>{updateButton()}</div>
            <div>{authDeleteButton()}</div>
            <Modal isOpen={modal} toggle={toggle} {...detail}>
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