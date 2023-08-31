import { useEffect, useState } from "react";

export const AddCity = ({ setCities, cities }) => {
  const [city, updateCity] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(city),
    })
      .then((res) => res.json())
      .then((newCity) => {
        updateCity({
          name: "",
        });

        setCities([...cities, newCity]);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCity((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <label htmlFor="newCityName"></label>
      <input
        type="text"
        id="cityName"
        name="name"
        placeholder="New City Name"
        value={city.name}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
