import React from "react";
import Product from "../Product/Product";
import Counter from "../Counter/Counter";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import "./ProductInBasket.css";

export default function ProductInBasket(props) {
    if (props.is_inBasket) {
    return (
        <article className="ProductInBasket">
        <div className="product-img">
            <img src={props.image} alt="" />
        </div>
        <div className="product-title">{props.title}</div>
        <div className="product-price">
            <span>{props.price}</span> грн.
        </div>
        <Counter />
        <DeleteProduct />
        </article>
    )} else {
        return <></>;
    };
}