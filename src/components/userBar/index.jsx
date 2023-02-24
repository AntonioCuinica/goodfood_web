import React from "react";
import "./index.css"

const UserBar=(props)=>{
    return(
        <div className="publisher">
            <div className="pub-profile">
                <img src={props.img} alt="profile"/>
                <p>Antonio Ricardo Cuinica</p>
            </div>
            <button>Seguir</button>
        </div>
    )
}

export default UserBar;