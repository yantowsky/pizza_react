import { useState } from "react";
import Button from "../../../components/Button/Button.jsx";

const MenuItem = (props) => {

    const { id, imageUrl, name, soldOut, ingredients, unitPrice } = props;

    const arrModIngredients = [];
    ingredients.forEach(element => {
        arrModIngredients.push(element[0].toUpperCase() + element.slice(1));
    });

    const [count, setCount] = useState(0);

    return (
        <li key={id} className="pizza__item">
            <img src={imageUrl} alt={name} className={soldOut ? "pizza__image pizza__image--mod" : "pizza__image"} />
            <div className="pizza__info">
                <p className="pizza__name">{name}</p>
                <p className="pizza__ingredients">{arrModIngredients.join(", ")}</p>
                <div className="pizza__actions">
                    {soldOut ?
                        <p className="pizza__price">Sold out</p> :
                        <p className="pizza__price">€{unitPrice.toFixed(2)}</p>
                    }
                    {!soldOut &&
                        (!count ?
                            <div className="pizza__edit">
                                <Button onClick={() => setCount(1)} text="add to cart" />
                            </div> :
                            <div className="pizza__edit">
                                <div className="pizza__counter">
                                    <Button
                                        onClick={() => { setCount(count - 1) }}
                                        isDisable={count < 2 ? true : false}
                                        text="-"
                                    />
                                    <p className="pizza__count">
                                        {count}
                                    </p>
                                    <Button
                                        onClick={() => { setCount(count + 1) }}
                                        isDisable={count > 12 ? true : false}
                                        text="+"
                                    />
                                </div>
                                <Button onClick={() => setCount(0)} text="delete" />
                            </div>
                        )
                    }
                </div>
            </div>
        </li >
    );
}

export default MenuItem;
