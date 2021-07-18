import React from "react";
import "./Product.css";

export default function Product(props) {
    return (
        <>
            <div className="Product__img">
            <img src={props.image} alt="" />
            </div>
            <div className="Product__title">{props.title}</div>
            <div className="Product__price">
              <span>{props.price}</span> грн.
            </div>
        </>
    )
}
