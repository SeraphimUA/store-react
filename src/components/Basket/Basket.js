import React from "react";
import ProductInBasket from "../ProductInBasket/ProductInBasket";
import "./Basket.css";

export default function Basket({basket, addProductInBasket, reduceProductInBasket, removeProductFromBasket}) {
      return (
        <section className="Basket">
            {basket.map((product) => {
                const { id } = product;
                return (
                    <ProductInBasket
                        key={id}
                        product={product}
                        addProductInBasket={addProductInBasket}
                        reduceProductInBasket={reduceProductInBasket}
                        removeProductFromBasket={removeProductFromBasket}
                    />
                );
            })}
        </section>
    );
}