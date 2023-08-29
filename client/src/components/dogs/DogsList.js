import { useEffect, useState } from "react";

export const DogsList = () => {
 
    

const [dogs, setDogs] = useState([])

useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('/api/dogs');
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchDogs();
  }, []);

  return (
    <article className="dogs">
        {
            dogs.map(dog => <div key={dog.dogId}>{dog.name}</div>)
        }
    </article>
);

}