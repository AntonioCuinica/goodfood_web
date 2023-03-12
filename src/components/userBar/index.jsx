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
            <div className="pub-follow">
                <Button text="Seguir"/>
            </div>
        </div>
    )
}

export default UserBar;