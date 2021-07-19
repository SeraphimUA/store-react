import React from "react";
/*import Counter from "../Counter/Counter";
import DeleteProduct from "../DeleteProduct/DeleteProduct";*/
import "./ProductInBasket.css";

export default function ProductInBasket({product, addProductInBasket, reduceProductInBasket, removeProductFromBasket}) {
    const { title, image, count, totalPrice, id } = product;
    return (
        <article className="ProductInBasket">
        <div className="basket-image">
            <img src={image} alt="" />
        </div>
        <div className="basket-title">{title}</div>
        <div>
            <button className="basket-button" onClick={() => addProductInBasket(id)}>+</button>
            <span>{count}</span>
            <button className="basket-button" onClick={() => reduceProductInBasket(id)}>-</button>
        </div>
        <div className="basket-price">
            <span>{totalPrice}</span> грн.
        </div>
        <button className="basket-remove" onClick={() => removeProductFromBasket(id)}>Удалить</button>
        </article>
    );
};