import React, { useState } from "react";
import "./AddProduct.css";

export default function AddProduct(props) {
    return (
        <div className="AddProduct">
            <button className="button" onClick={putProduct}>Add</button>
        </div>
    )
}
