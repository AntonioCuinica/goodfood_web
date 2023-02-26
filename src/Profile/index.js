import React from "react";
import Button from "../components/button";
import ProfileFoto from "../img/profile.jpg"
import "./index.css"

const Profile=()=>{
    return(
        <div className="profile">
            <div className="profile-about">
                <img src={ProfileFoto} alt="cuinica"/>
                <p className="name">Antonio Ricardo Cuinica</p>
                <div className="info">
                    <div className="data">
                        <p>10K</p>
                        <p>Publicações</p>
                    </div>
                    <div className="data">
                        <p>560</p>
                        <p>Seguidores</p>
                    </div>
                    <div className="data">
                        <p>1k</p>
                        <p>Seguindo</p>
                    </div>
                </div>
                <Button text="Editar"/>
            </div>
            <div className="profile-content"></div>
        </div>
    )
}

export default Profile;