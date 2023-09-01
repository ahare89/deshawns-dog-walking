import { Link } from "react-router-dom"

export const Walker = ({id, name}) => {
    return (
        <section className="walker">
            <div>
                <Link to={`/walkers/${id}`}>{name}</Link>
            </div>
        </section>
    )
}