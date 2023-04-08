import React, { useEffect, useState } from "react";
import Button from "../button";
import Profile from "../../img/profile.jpg";
import "./index.css"

const UserBar=(props)=>{
    const name=props.name;
    const accountId=props.accountId;
    const URL="http://localhost:8080/account/image/";
    const [image,setImage]=useState("NotFound");

    const imageFetch= async ()=>{
        const response= await fetch(`${URL+accountId}`);
        const data= await response.json();
        setImage(data.image);
        console.log(image);
    }

    useEffect(()=>{
        imageFetch();
    },[]);

    return(
        <div className="publisher">
            <div className="pub-profile">
                <img src={image!=="NotFound" ? image:Profile} alt={name}/>
                <p>{name}</p>
            </div>
            <div className="pub-follow">
                <Button text="Seguir"/>
            </div>
        </div>
    )
}

export default UserBar;