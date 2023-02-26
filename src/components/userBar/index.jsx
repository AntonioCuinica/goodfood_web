import React from "react";
import Button from "../button";
import "./index.css"

const UserBar=(props)=>{
    return(
        <div className="publisher">
            <div className="pub-profile">
                <img src={props.img} alt="profile"/>
                <p>Antonio Ricardo Cuinica</p>
            </div>
            <Button text="Seguir"/>
        </div>
    )
}

export default UserBar;