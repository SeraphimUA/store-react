import React from "react";
import Product from "../Product/Product";
import AddProduct from "../AddProduct/AddProduct";
import "./ProductCard.css";

export default function ProductCard(props) {
    return (
        <article className="ProductCard">
            <Product key={props.id} {...props} />
            <AddProduct {...props} />
        </article>
    )
}