import React from "react";

export default function Navbar(props) {
    return (
        <nav>
            <img src={props.img} className="nav--logo"/>
        </nav>
    );
} 