import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const WalkerDetails = () => {
  const { walkerId } = useParams();
  const [walker, updateWalker] = useState({
    name: '',
    walkerId: null,
    cityId: null,
    cities: []
  });
  const [checkedList, setCheckedList] = useState([]);
  const [cities, setCities] = useState([]);
  const [walkerCities, setWalkerCities] = useState([]);



  useEffect(() => {
    fetch("/api/walkercities")
    .then(res => res.json())
    .then((walkerCitiesArray) => {
        setWalkerCities(walkerCitiesArray)
    })
  },[])

  useEffect(() => {
    fetch("/api/cities")
      .then((res) => res.json())
      .then((cityArray) => {
        setCities(cityArray);
      });
  },[]);

  useEffect(() => {
    fetch(`/api/walkers/${walkerId}`)
      .then((res) => res.json())
      .then((singleWalker) => {
        updateWalker(singleWalker);

        const walkerCityNames = singleWalker.cities.map(city => city.name)
        setCheckedList(walkerCityNames)
      })
      .catch((error) => {
        console.error("There was a problem with the fetch", error);
      });
  }, [walkerId]);

  const handleSelect = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
        setCheckedList(checkedList.filter(item => item !== value))
    }
  };

const handleSubmit = async () => {
    const updatedCities = cities.filter(city => checkedList.includes(city.name))

    const response = await fetch(`/api/walkers/${walkerId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            walkerId: walker.walkerId,
            name: walker.name,
            cityId: walker.cityId,
            cities: updatedCities
        })
    })

    if (response.ok) {
        console.log("Success")
    } else {
        console.error("There was an error")
    }
}

const handleChange = (e) => {
    e.preventDefault()
    const newName = e.target.value
    updateWalker({
        ...walker,
        name: newName,
    })
}




  return (
    <>
      <input type="text" placeholder={walker.name} value={walker.name} onChange={handleChange}></input>
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>

      {cities.map((city, index) => {
        return (
          <div key={city.cityId} className="checkbox-container">
            <input
              type="checkbox"
              name="cities"
              value={city.name}
              onChange={handleSelect}
              checked={checkedList.includes(city.name)}
            />
            <label>{city.name}</label>
          </div>
        );
      })}
      <button type="submit">Save Changes</button>
      </form>
    </>
  );
};
