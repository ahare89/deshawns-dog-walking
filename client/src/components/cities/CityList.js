import { useEffect, useState } from "react";

export const CityList = () => {

const [cities, setCities] = useState([])


useEffect(() => {
    const fetchCities = async () => {
        try {
            const response  = await fetch("/api/cities")
            const data = await response.json()
            setCities(data)
            } catch(error) {
            console.error("Error fetching data:", error)
        }
    };
    fetchCities();
}, []);

return (
    <article className="cities">
        {
            cities.map(city => <div className="city" key={city.cityId}>{city.name}</div>)
        }
    </article>
)


}