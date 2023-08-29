import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DeleteDog } from "./DeleteDog";
import { DogDetails } from "./DogDetails";
import { Dog } from "./Dog";

export const DogsList = () => {
 
    
const [dogs, setDogs] = useState([])

    const fetchDogs = async () => {
      try {
        const response = await fetch('/api/dogs');
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
useEffect(() => {
    fetchDogs()
},
[])



  return (
    <>
    <div>
    <article className="dogs">
        {
            dogs.map(dog => (
            <div key={dog?.dogId} className="dog-container">
            <Dog id={dog?.dogId} name={dog?.name} city={dog?.city?.name} walker={dog?.walker?.name}/>
            <DeleteDog id={dog?.dogId} fetchDogs={fetchDogs} />
            </div>
            ))
        }
        
    </article>
    
    <section>
        <button>Add Dog</button>
    </section>
    </div>
    </>
);

}