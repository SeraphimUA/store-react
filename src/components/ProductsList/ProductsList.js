import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css"

export default function ProductsList(props) {
    const productsData = props.data.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
    return <section className="ProductsList">{productsData}</section>;
  }