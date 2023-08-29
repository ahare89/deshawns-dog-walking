import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export const DogDetails = () => {

    const {dogId} = useParams();
    const [dog, updateDog] = useState([])

    useEffect(
        () => {
            fetch(`/api/dogs/${dogId}`)
            .then(res => res.json())
            .then (
                (singleDog) => {
                    updateDog(singleDog)
            })
            .catch(error => {
                console.error('There was a problem with the fetch:', error);
            })
        },
        [dogId]
    )



return <>
<section className="dog">
    <header className="dog_header">{dog?.name}</header>
    <div>Assigned Walker: {dog?.walker?.name}</div> 
    <div>City: {dog?.city?.name}</div>

</section>
</>

}