import { Link } from "react-router-dom";
import { DeleteDog } from "./DeleteDog";
import "./Dog.css"

export const Dog = ({ id, name, walker, city }) => {
  return (
    <section className="dog">
      <div>
        <Link to={`/api/dogs/${id}`}>Name: {name}</Link>
      </div>

      <div><DeleteDog id={id}/></div>
    </section>
  );
};
