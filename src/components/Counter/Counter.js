import React from "react";

import "./Counter.css";

export default function Counter() {
    return (
        <div className="Counter">
            <input type="number" min="0" value="1" />
        </div>
    )
}