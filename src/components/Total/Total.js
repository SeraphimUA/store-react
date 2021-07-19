import React from "react";
import "./Total.css";

export default function Total({basket}) {
    let sum = 0;
    basket.forEach(product => sum += product.totalPrice);
    return (
        <section className="Total">
            <span>Итого: {sum} грн.</span>
        </section>
    );
}