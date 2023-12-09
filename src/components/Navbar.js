import React from "react";
import Airbnb from "../images/Airbnb-icon.png";

export default function Navbar(){
    return(
        <nav>
            <img className="nav-logo" src={Airbnb} alt="" />;
        </nav>
    )
}