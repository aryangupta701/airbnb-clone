import React from "react";
import StarLogo from "../images/starLogo.png"

export default function Card(props){
    let badgetext
    if(props.item.openSpots === 0){
        badgetext = "SOLD OUT"
    }else if(props.item.location === "Online"){
        badgetext = "Online"
    }
    return(
        <div className="card">
            { badgetext && <div className="card-batch">{badgetext}</div> }
            <img src={props.item.coverImg} alt="katie" className="card-img"/>
            <p>
                <img src={StarLogo} alt="star-logo" className="star-logo" />
                <span> {props.item.stats.rating.toFixed(1)}</span>
                <span id="rating-text"> ({props.item.stats.reviewCount})•{props.item.location}</span>
            </p>
            <p id="card-title">{props.item.title}</p>
            <p><span id="bold-text">From ${props.item.price}</span> / person</p>
        </div>
    )
}