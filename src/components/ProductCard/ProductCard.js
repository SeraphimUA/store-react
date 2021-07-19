import React from "react";
import Product from "../Product/Product";
import AddProduct from "../AddProduct/AddProduct";
import "./ProductCard.css";

export default function ProductCard({product, addProductInBasket}) {
    const { id } = product;
    return (
        <article className="ProductCard" onClick={() => addProductInBasket(id)}>
            <Product product={product} />
            <AddProduct />
        </article>
    )
}