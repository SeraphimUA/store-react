import React from "react";
import "./Product.css";

export default function Product({product}) {
    return (
        <>
            <div className="Product__img">
            <img src={product.image} alt="" />
            </div>
            <div className="Product__title">{product.title}</div>
            <div className="Product__price">
              <span>{product.price}</span> грн.
            </div>
        </>
    )
}
