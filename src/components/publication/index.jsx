import React from "react";
import Profile from "../../img/profile.jpg"
import MukapataImg from "../../img/prato1.png"
import {FaEye,FaHeart} from "react-icons/fa"
import {IoStarOutline} from "react-icons/io5"
import "./index.css";
import UserBar from "../userBar";
import SeeRecipe from "../seeRecipe";
import FetchImage from "../fetchImage";

const Publication=(props)=>{
    const publication=props.publication;
    const image= Boolean(publication) ?FetchImage("http://localhost:8080/publication/image/"+publication.id) : "NotFound";

    return(
        Boolean(publication) ?
        <div className="pub-main">
            <UserBar img={Profile} name={publication.name} accountId={publication.accountId} hide={props.hide}/>
            <div className="pub-recipe">
                <div className="pub-recipe-title">
        	        <p>{publication.recipe}</p>
                    <IoStarOutline className="icon"/>
                </div>
                <div className="pub-recipe-img">
                    <img src={image!=="NotFound" ? image:MukapataImg} alt={publication.recipe} title={publication.recipe}/>
                </div>
            </div>

            <div className="pub-info">
                <div className="pub-info-like">
                    <FaHeart/>
                    <p>{publication.likes}</p>
                </div>
                <div className="pub-info-view">
                    <FaEye/>
                    <p>{publication.views}</p>
                </div>
                <div className="pub-info-open" >
                    <p onClick={()=>props.setModal({close:false,component:<SeeRecipe setModal={props.setModal} recipeId={publication.recipeId}/>})
                }>Ver</p>
                </div>
            </div>
        </div>
        :
        <></>
    );
}

export default Publication;