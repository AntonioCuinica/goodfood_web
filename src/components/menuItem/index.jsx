import React from "react";
import "./index.css";

const MenuItem=(props)=>{
    return(
        <div className="menu-item" onClick={()=>props.setTab(props.name)} 
             style={props.name===props.tabSelected? {"backgroundColor":"rgba(0, 0, 0, 0.50)"}:{}} 
        >
            <span className="menu-logo">{props.logo}</span>
            <p className="menu-text">{props.name}</p>
        </div>
    );
}

export default MenuItem;