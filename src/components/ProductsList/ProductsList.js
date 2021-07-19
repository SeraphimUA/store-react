import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css"

export default function ProductsList({products, addProductInBasket}) {
    return (
        <section className="ProductsList">
            {products.map((product) => {
                const { id } = product;
                return (
                    <ProductCard key={id.toString()} product={product} addProductInBasket={addProductInBasket} />
                );
            })}
        </section>
    );
  }