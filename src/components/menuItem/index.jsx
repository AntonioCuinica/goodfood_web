import React from "react";
import "./index.css";

const MenuItem=(props)=>{
    return(
        <div className="item">
            <></>
            <span className="logo">{props.logo}</span>
            <p className="text">{props.name}</p>
        </div>
    );
}

export default MenuItem;