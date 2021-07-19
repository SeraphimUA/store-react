import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css"

export default function NavMenu() {
    return (
        <div className="NavMenu">
            <ul className="NavMenuList">
            <li className="NavMenuItem">
                <Link to="/">Магазин</Link>
            </li>
            <li className="NavMenuItem">
                <Link to="/basket">Корзина</Link>
            </li>
        </ul>
        </div>
    )
}