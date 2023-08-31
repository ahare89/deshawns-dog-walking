import { useEffect, useState } from "react";
import { AddCity } from "./AddCity";

export const CityList = () => {

const [cities, setCities] = useState([])


useEffect(() => {
    fetch("/api/cities")
    .then(res => res.json())
    .then((cityData) => {
        setCities(cityData)
    })
}, []);

return (
    <>
    <article className="cities">
        {
            cities.map(city => <div className="city" key={city.cityId}>{city.name}</div>)
        }
    </article>
    <section>
        <AddCity cities={cities} setCities={setCities}/>
    </section>
    </>
)


}