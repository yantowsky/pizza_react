import { useEffect, useState } from "react";
import MenuItem from "../components/Menu/MeniItem/MenuItem.jsx";

const Menu = () => {
    const [pizzas, setPizzas] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getAllPizzas = async () => {
            try {
                const response = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");
                if (!response.ok) {
                    throw new Error("Failed to fetch")
                }
                const data = await response.json();
                setPizzas(data.data);
            } catch (error) {
                setError(error.message);
            }
        }
        getAllPizzas();
    }, [])

    return (
        <ul className="pizza">
            {error && <p>{error}</p>}
            {pizzas.map(pizza => {
                return (
                    <MenuItem
                        key={pizza.id}
                        id={pizza.id}
                        imageUrl={pizza.imageUrl}
                        name={pizza.name}
                        soldOut={pizza.soldOut}
                        ingredients={pizza.ingredients}
                        unitPrice={pizza.unitPrice}
                    />
                );
            })}
        </ul>
    );
}

export default Menu;