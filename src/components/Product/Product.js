import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({product}) {
  const { id } = product;
  console.log(id);
    return (
        <>
          <Link to={`/products/${id.toString()}`}>
            <div className="Product__img">
            <img src={product.image} alt="" />
            </div>
            <div className="Product__title">
              {product.title}
            </div>
            <div className="Product__price">
              <span>{product.price}</span> грн.
            </div>
          </Link>
        </>
    )
}
