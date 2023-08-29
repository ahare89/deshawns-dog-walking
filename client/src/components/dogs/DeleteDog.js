import { useState } from "react"

export const DeleteDog = ({id, fetchDogs}) => {

//button handler for deleting a dog

const [dogs, setDogs] = useState();

const getAllDogs = () => {
    fetch("/api/dogs")
    .then(res => res.json())
    .then((dogs) => {
        setDogs(dogs)
    })
}

const deleteDogButtonHandler = (event) => {
    event.preventDefault()

    fetch(`/api/dogs/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => {
        if (res.status === 204) {
            fetchDogs()
        } else if (res.status === 404) {
            console.log("Dog not found")
        } else {
            console.log("Unexpected response", res);
    }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

return <>

<button className="DeleteButton" onClick={(event) => deleteDogButtonHandler(event)} className="btn-delete-dog">Delete Dog</button>
</>

}