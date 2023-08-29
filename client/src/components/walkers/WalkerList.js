import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WalkerList.css"

export const WalkerList = () => {

const [walkers, setWalkers] = useState([]);

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

return (
    <article className="walkers">
        {
            walkers.map(walker => <div key={walker.walkerId}><Link>{walker.name}</Link></div>)
        }
    </article>
)

}