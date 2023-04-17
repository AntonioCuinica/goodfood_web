import React from "react";
import Button from "../button";
import Profile from "../../img/profile.jpg";
import "./index.css"
import FetchImage from "../fetchImage";

const UserBar=(props)=>{
    const name=props.name;
    const accountId=props.accountId;
    const image=FetchImage("http://localhost:8080/account/image/"+accountId);

    return(
        <div className="publisher">
            <div className="pub-profile">
                <img src={image!=="NotFound" ? image:Profile} alt={name}/>
                <p>{name}</p>
            </div>
            <div className="pub-follow" style={{display:Boolean(props.hide)?"none":"flex"}} >
                <Button text="Seguir"/>
            </div>
        </div>
    )
}

export default UserBar;