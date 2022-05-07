import React from "react";
import Image from "../images/katiepng.png"
import StarLogo from "../images/starLogo.png"

export default function Card(){
    return(
        <div className="card">
            <img src={Image} alt="katie" className="card-img"/>
            <p>
                <img src={StarLogo} alt="star-logo" className="star-logo" />
                <span> 5.0</span>
                <span id="rating-text"> (6).USA</span>
            </p>
            <p>Life lessons with Katie Zaferes</p>
            <p><span id="bold-text">From $136</span> / person</p>
        </div>
    )
}