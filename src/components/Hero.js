import React from "react";
import AirbnbExp from "../images/airbnb-experiences.jpg"
//section will have a flexbox to add flex to only this section
export default function Hero(){
    return(
        <section className="hero">
            <img className="hero-image" src={AirbnbExp} alt="" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
}