import React from "react";
import star from "../images/red-star-rating.jpg"
import swimmer from "../images/professional-swimmer.jpg"

/*----------------------------------------CONDITIONING RENDERING----------------------------------------------*/
//span make elements inline or on the same line
//for the sold out badge we SURROUND the the SOLD OUT div with curly braces and add javascript code 
//props.openSpots === 0 to target that there are no more open spots
//and props.location === "Online" to tell if the services are online
//in the div curly braces we place badgeText because we allow badgeText to have multiple values with let keyword
export default function Card(props){
    let badgeText
    if (props.card.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.card.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={swimmer} alt="" />
            <div className="card-stats">
                <img className="card-star" src={star} />
                <span>{props.card.stats.rating}</span>
                <span className="stat-color">({props.card.stats.reviewCount}) &#183;</span>
                <span className="stat-color">{props.card.location}</span>
            </div>
            <p className="card-title">{props.card.title}</p>
            <p className="card-price"><span className="cost-bold">From ${props.card.price}</span> / person</p>
        </div>
    )
}