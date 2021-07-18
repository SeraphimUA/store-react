import React from "react";
import ProductInBasket from "../ProductInBasket/ProductInBasket";
import "./Basket.css";

export default function Basket(props) {
    const productsData = props.data.map((product) => (
        <ProductInBasket key={product.id} {...product} />
      ));
      return <section className="Basket">{productsData}</section>;
}