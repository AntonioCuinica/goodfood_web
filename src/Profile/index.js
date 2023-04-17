import React from "react";
import Button from "../components/button";
import Publication from "../components/publication";
import ProfileFoto from "../img/profile.jpg";
import {IoAdd} from "react-icons/io5";
import "./index.css";
import NewRecipe from "../components/newRecipe";
import EditProfile from "../components/editProfile";
import FetchImage from "../components/fetchImage";
import FetchPublication from "../components/fetchPublication";

const Profile=(props)=>{
    const account=Boolean(props.user) ? props.user.account : null;
    const image= Boolean(account) ? FetchImage("http://localhost:8080/account/image/"+account.id) : "NotFound";
    const publication= Boolean(account) ? FetchPublication("http://localhost:8080/publication/view/all/"+account.id) : [];

    return(
        Boolean(account) ?
        <div className="profile">
            <div className="profile-about">
                <img src={image!=="NotFound" ? image:ProfileFoto} alt={account.name+" "+account.surname}/>
                <p className="name">{account.name+" "+account.surname}</p>
                <div className="info">
                    <div className="data">
                        <p>10K</p>
                        <p>Publicações</p>
                    </div>
                    <div className="data">
                        <p>{account.followers.length}</p>
                        <p>Seguidores</p>
                    </div>
                    <div className="data">
                        <p>{account.following.length}</p>
                        <p>Seguindo</p>
                    </div>
                </div>
                <Button text="Editar" onClick={()=>props.setModal({close:false,component:<EditProfile setModal={props.setModal}/>})}/>
            </div>
            <div className="profile-content">
                <div className="profile-content-tabs">
                    <p>Publicações</p>
                    <p>Favoritos</p>
                </div>
                <button className="new-recipe-button" onClick={()=>props.setModal({close:false,component:<NewRecipe setModal={props.setModal}/>})} >Publicar nova receita {<IoAdd/>}</button>
                <div className="profile-content-publications">
                    {
                        publication.map(pub=><div className="pub"><Publication setModal={props.setModal} publication={pub} hide={true}/> </div>)
                    }
                </div>
            </div>
        </div>
        :
        <></>
    )
}

export default Profile;