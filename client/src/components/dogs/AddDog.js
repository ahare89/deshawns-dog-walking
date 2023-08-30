import { useEffect, useState } from "react";

export const AddDog = ({fetchDogs}) => {

//add click handler for add dog button

const [walkers, setWalkers] = useState([])

const [cities, setCities] = useState([])

const [dog, updateDog] = useState({
    name: "",
    walkerId: "",
    cityId: ""
})

useEffect(() => {
    fetch("/api/cities")
    .then(res => res.json())
    .then((cityArray) => {
        setCities(cityArray)
    })
},[])

useEffect(() => {
    fetch("/api/walkers")
    .then(res => res.json())
    .then((walkerArray) => {
        setWalkers(walkerArray)
    })
},[])

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dog)
    })
    .then(response => response.json())
    .then(data => {
        fetchDogs()
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };


const handleChange = (e) => {
    const { name, value } = e.target
    updateDog(prevState => ({
        ...prevState,
        [name]: value
    }))
}




return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of Dog: </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter dog name"
          value={dog.name}
          onChange={handleChange}
        />

        <label htmlFor="walkerId">Assigned Walker: </label>
        <select
            value=""
            id="walkerId"
            name="walkerId"
            onChange={handleChange}
        >
            <option value="" disabled>Choose a Walker</option>
          {walkers.map((walker) => (
            <option key={walker.walkerId} value={walker.walkerId}>
              {walker.name}
            </option>
          ))}
        </select>

        <label htmlFor="cityId">City: </label>
        <select
            value=""
            id="cityId"
            name="cityId"
            onChange={handleChange}
        >
            <option value="" disabled>Choose a City</option>
          {cities.map((city) => (
            <option key={city.cityId} value={city.cityId}>
              {city.name}
            </option>
          ))}
        </select>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};