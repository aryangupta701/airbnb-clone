import React from "react";
import Logo from '../images/airbnb-logo.png'

const Navbar = ()=>{
    return(
        <div className="nav-bar">
            <img src={Logo} alt="airbnb" id="airbnb-logo"/>
        </div>
    )
}

export default Navbar