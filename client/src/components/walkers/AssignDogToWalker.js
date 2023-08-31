import { useEffect, useState } from "react"

export const AssignDogToWalker = ({fetchDogs, setDogs, walker, walkerCityId, walkerId, dogs, updateDogs}) => {

const [assignDogButton, setAssignDogButton] = useState(false);
const [selectedDog, setSelectedDog] = useState(null)
const [filteredDogs, setFilteredDogs] = useState([])


const handleChange = (e) => {
    const value = e.target.value
    const foundDog = filteredDogs.find(dog => dog.dogId === parseInt(value))
    setSelectedDog(foundDog)
}

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDog) {
      console.error("No dog selected");
      return;
    }
  
  
    try {
      const response = await fetch(`/api/dogs/${selectedDog.dogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dogId: selectedDog.dogId,
          name: selectedDog.name,
          walkerId: walkerId,
          cityId: selectedDog.cityId,
        }),
      });  
      fetchDogs()
     
    } catch (error) {
      console.error("Error updating dog", error);
    }
  };

useEffect(() => {
    const newFilteredDogs = dogs.filter(dog => dog.cityId === walkerCityId && dog.walkerId !== walkerId)
    setFilteredDogs(newFilteredDogs)
    console.log("useEffect ran", newFilteredDogs);
},[dogs, walkerCityId, walkerId])




const handleAssignDogButton = (clickEvent) => {
    clickEvent.preventDefault()
    setAssignDogButton(true)
}

const handleCancelButton = (clickEvent) => {
    setAssignDogButton(false)
}



if(assignDogButton) {
    return <>
    <label>Choose a dog to assign this walker to: </label>
    <select id="dog" value={selectedDog ? selectedDog?.dogId: ""} name="dog.dogId" onChange={handleChange}>
        <option value="" disabled>Choose a Dog</option>
        {filteredDogs.map((dog) => (
        <option key={dog.dogId} value={dog.dogId}>{dog.name}</option>))}
    </select>
        <button id="cancel" onClick={handleCancelButton}>Cancel</button>
        <button id="submit" onClick={handleSubmit}>Submit</button>
    </>
}

return (
    <button onClick={handleAssignDogButton}>Assign Dog</button>
)


}