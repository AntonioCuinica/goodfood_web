import React from "react";
import Profile from "../../img/profile.jpg"
import Login from "../login";
import SignUp from "../signUp";
import UserBar from "../userBar";
import "./index.css"

const AboutUser=(props)=>{
    return(
        Boolean(props.user) ? 
        <div className="about-user">
            <div className="abusr-profile">
                <img src={Profile} alt="profile"/>
                <p>Antonio Ricardo Cuinica</p>
                <button>Sair</button>
            </div>
            <div className="abusr-sugestion">
                <h2 className="abusr-sugestion-title">Sugestões de contas a seguir</h2>
                <UserBar img={Profile}/>
                <UserBar img={Profile}/>
                <UserBar img={Profile}/>
                <UserBar img={Profile}/>
            </div>
        </div>
        :
        <div className="about-user">
            <div className="abusr-profile">
                <button onClick={()=>props.setModal({close:false,component:<Login setModal={props.setModal}/>})}>Faça login na sua conta</button>
                <p>|</p>
                <button onClick={()=>props.setModal({close:false,component:<SignUp setModal={props.setModal}/>})}>Criar nova conta</button>
            </div>
            <div className="abusr-sugestion">
                
            </div>
        </div>
    );
}

export default AboutUser;