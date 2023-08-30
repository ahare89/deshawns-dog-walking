import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WalkerList.css"

export const WalkerList = () => {

const [walkers, setWalkers] = useState([]);
const [cities, setCities] = useState([])
const [selectedCity, setSelectedCity] = useState("")
const [filteredWalkers, setFilteredWalkers] = useState([]);

useEffect(() => {
    const fetchWalkers = async () => {
    try {
        const response = await fetch("/api/walkers")
        const data = await response.json()
        setWalkers(data)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchWalkers();
},[])

useEffect(() => {
    fetch("api/cities")
    .then(res => res.json())
    .then((cityArray) => {
        setCities(cityArray)
    })
},[])

useEffect(() => {
    if(selectedCity) {
        setFilteredWalkers(
            walkers.filter((walker) => walker.cityId === selectedCity)
        );
    }   else {
        setFilteredWalkers(walkers);
    }
}, [selectedCity, walkers])

const handleCityChange = (e) => {
    const value = e.target.value;
    if (value === 'all') {
        setSelectedCity("")
    } else {
        setSelectedCity(Number(value));
    }
}


return (
    <>
    <section>
        <label htmlFor="filterCity">Cities: </label>
    <select value={selectedCity} id="filterCity" onChange={handleCityChange}>
        <option value="" disabled>Choose a City to Filter</option>
        <option value="all">Show All</option>
    {cities.map(city => <option key={city.cityId} value={city.cityId}>{city.name}</option>)}
    </select>
    </section>
    <article className="walkers">
        {
            filteredWalkers.map(walker => <div key={walker.walkerId}><Link>{walker.name}</Link></div>)
        }
    </article>
    </>
)

}