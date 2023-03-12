import React from "react";
import Button from "../components/button";
import Publication from "../components/publication";
import ProfileFoto from "../img/profile.jpg";
import {IoAdd} from "react-icons/io5";
import "./index.css";
import NewRecipe from "../components/newRecipe";

const Profile=(props)=>{
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
            <div className="profile-content">
                <div className="profile-content-tabs">
                    <p>Publicações</p>
                    <p>Favoritos</p>
                </div>
                <button className="new-recipe-button" onClick={()=>props.setModal({close:false,component:<NewRecipe setModal={props.setModal}/>})} >Publicar nova receita {<IoAdd/>}</button>
                <div className="profile-content-publications">
                    <div className="pub">
                        <Publication setModal={props.setModal}/>
                    </div>
                    <div className="pub">
                        <Publication setModal={props.setModal}/>
                    </div>
                    <div className="pub">
                        <Publication setModal={props.setModal}/>
                    </div>
                    <div className="pub">
                        <Publication setModal={props.setModal}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;