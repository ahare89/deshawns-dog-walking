import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteDog } from "./DeleteDog";

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
    <article className="dogs">
        {
            dogs.map(dog => <div key={dog.dogId}><Link>{dog.name}</Link><DeleteDog fetchDogs={fetchDogs}id={dog.dogId}/></div>)
        }
    </article>
    <section>
        <button>Add Dog</button>
    </section>
    </>
);

}