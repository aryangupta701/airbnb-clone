import React from "react";
import StarLogo from "../images/starLogo.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="katie" className="card-img"/>
            <p>
                <img src={StarLogo} alt="star-logo" className="star-logo" />
                <span> {props.rating.toFixed(1)}</span>
                <span id="rating-text"> ({props.reviewCount})•{props.country}</span>
            </p>
            <p>{props.title}</p>
            <p><span id="bold-text">From ${props.price}</span> / person</p>
        </div>
    )
}