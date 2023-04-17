import React from "react";
import Profile from "../../img/profile.jpg"
import Login from "../login";
import SignUp from "../signUp";
import UserBar from "../userBar";
import "./index.css"
import FetchImage from "../fetchImage";

const AboutUser=(props)=>{
    const account=Boolean(props.user) ? props.user.account:null;
    const image=Boolean(account) ? FetchImage("http://localhost:8080/account/image/"+account.id) : "NotFound";

    const logout=()=>{
        localStorage.clear()
        window.location.reload(false);
    }
    
    return(
        Boolean(account) ? 
        <div className="about-user">
            <div className="abusr-profile">
                <img src={image!=="NotFound" ? image:Profile} alt={account.name}/>
                <p>{account.name+" "+account.surname}</p>
                <button onClick={logout}>Sair</button>
            </div>
            <div className="abusr-sugestion">
                <h2 className="abusr-sugestion-title">Sugestões de contas a seguir</h2>
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