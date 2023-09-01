import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WalkerList.css";
import { AssignDogToWalker } from "./AssignDogToWalker";
import { DeleteWalker } from "./DeleteWalker";
import { Walker } from "./Walker";

export const WalkerList = () => {
  const [walkers, setWalkers] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredWalkers, setFilteredWalkers] = useState([]);
  const [dogs, setDogs] = useState([]);

  const fetchWalkers = async () => {
    try {
      const response = await fetch("/api/walkers");
      const data = await response.json();
      setWalkers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchWalkers();
  }, []);

  useEffect(() => {
    fetch("/api/dogs")
      .then((res) => res.json())
      .then((dogArray) => {
        setDogs(dogArray);
      });
  }, []);

  useEffect(() => {
    fetch("api/cities")
      .then((res) => res.json())
      .then((cityArray) => {
        setCities(cityArray);
      });
  }, []);

  useEffect(() => {
    if (selectedCity) {
        const numSelectedCity = Number(selectedCity)
      setFilteredWalkers(
        walkers.filter((walker) => {
          if (walker.cities) {
            return walker.cities.some(city => city.cityId === numSelectedCity);
          }
            if (walker.cityId) {
                return walker.cityId === numSelectedCity;
            }
            return false;
    })
      );
    } else {
      setFilteredWalkers(walkers);
    }
  }, [selectedCity, walkers]);

  const handleCityChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedCity("");
    } else {
      setSelectedCity(value);
    }
  };

  const updateDogs = (newDogs) => {
    setDogs(newDogs);
  };

  const fetchDogs = () => {
    fetch("/api/dogs")
      .then((res) => res.json())
      .then((dogArray) => {
        setDogs(dogArray);
      });
  };

  return (
    <>
      <section>
        <label htmlFor="filterCity">Cities: </label>
        <select
          value={selectedCity}
          id="filterCity"
          onChange={handleCityChange}
        >
          <option value="" disabled>
            Choose a City to Filter
          </option>
          <option value="all">Show All</option>
          {cities.map((city) => (
            <option key={city.cityId} value={city.cityId}>
              {city.name}
            </option>
          ))}
        </select>
      </section>
      <article className="walkers">
        {filteredWalkers.map((walker) => (
          <div key={walker.walkerId}>
            <Walker id={walker.walkerId} name={walker.name} />
            <AssignDogToWalker
              dogs={dogs}
              setDogs={setDogs}
              fetchDogs={fetchDogs}
              updateDogs={updateDogs}
              walker={walker}
              walkerCityId={walker.cityId}
              walkerId={walker.walkerId}
            />
            <DeleteWalker
              walker={walker}
              fetchWalkers={fetchWalkers}
              walkerId={walker.walkerId}
              walkers={walkers}
              setWalkers={setWalkers}
            />
          </div>
        ))}
      </article>
    </>
  );
};
