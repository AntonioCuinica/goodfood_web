import React from "react";
import Profile from "../../img/profile.jpg"
import UserBar from "../userBar";
import "./index.css"

const AboutUser=(props)=>{
    return(
        <div className="about-user">
            <div className="abusr-profile">
                <img src={Profile} alt="profile"/>
                <p>Antonio Ricardo Cuinica</p>
                <button>Ver perfil</button>
            </div>
            <div className="abusr-sugestion">
                <h2 className="abusr-sugestion-title">Sugestões de contas a seguir</h2>
                <UserBar img={Profile}/>
                <UserBar img={Profile}/>
                <UserBar img={Profile}/>
                <UserBar img={Profile}/>
            </div>
        </div>
    );
}

export default AboutUser;