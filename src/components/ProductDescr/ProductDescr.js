import { productItems } from '../../productsArray';
import React from "react";
import "./ProductDescr.css";

export default function ProductDescr(props) {
    let id = parseInt(props.match.params.id, 10);
    let product;
    console.log(id);
    for (let i = 0; i < productItems.length; i++) {
        if (productItems[i].id === id) {
            product = productItems[i];
            break;
        }
    }

    if (product !== undefined) {
        return (
            <>
                <h1>{product.title}</h1>
                <div className="product-img">
                    <img src={product.image} alt="" />
                </div>
                <div className="product-price">
                    <span>Цена: {product.price} грн.</span>
                </div>
            </>
        );
    }
}
