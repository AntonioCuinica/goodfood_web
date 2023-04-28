import React, { useEffect, useState } from "react";
import MukapataImg from "../../img/prato1.png"
import {FaEye,FaHeart} from "react-icons/fa"
import {IoStarOutline} from "react-icons/io5"
import "./index.css";
import UserBar from "../userBar";
import SeeRecipe from "../seeRecipe";
import FetchImage from "../fetchImage";
import FetchLike from "../fetchLike";
import FetchView from "../fetchView";
import FormatValue from "../formatValue";

const Publication=(props)=>{
    const publication=props.publication;
    const image = Boolean(publication) ?FetchImage("http://localhost:8080/publication/image/"+publication.id) : "NotFound";
    const like = Boolean(publication) ?FetchLike("http://localhost:8080/like/all/"+publication.id) : [];
    const [numLikes,setNumLikes]=useState(0);
    const [liked,setLiked]=useState(false);
    const [numViews,setNumViews]=useState(0);
    const [viewed,setViewed]=useState(false);
    const view = Boolean(publication) ?FetchView("http://localhost:8080/view/all/"+publication.id) : [];

    const initLike=()=>{
        setNumLikes(0);
        if(!Boolean(like)){
            setLiked(false)
        }else if(like.length === 0){
            setLiked(false)
        }
        
        Boolean(props.user) ? 
            setLiked(like.some(item=>item.account.id===props.user.account.id))
         : 
            setLiked(false);
    }
    
    const initView=()=>{
        setNumViews(0);
        if(!Boolean(view)){
            setViewed(false)
        }else if(view.length === 0){
            setViewed(false)
        }
        
        Boolean(props.user) ? 
            setViewed(view.some(item=>item.account.id===props.user.account.id))
         : 
            setViewed(false);
    }

    const post= async (URL)=>{
        await fetch(`${URL}`,{method:"POST"});
    }

    const deleteLikes= async (URL)=>{
        await fetch(`${URL}`,{method:"DELETE"});
    }

    const handleLike=()=>{
        if(Boolean(props.user)){
            if(publication.accountId !== props.user.account.id){
                setLiked(!liked);
                if(!liked){
                    post("http://localhost:8080/like/"+publication.id+"/"+props.user.account.id);
                    setNumLikes(numLikes+1);
                }else if(Boolean(like)){
                    deleteLikes("http://localhost:8080/like/"+publication.id+"/"+props.user.account.id);
                    setNumLikes(numLikes-1);
                }
            }
        }
    }
    
    const handleView=()=>{
        props.setModal({close:false,component:<SeeRecipe setModal={props.setModal} recipeId={publication.recipeId}/>})
        if(Boolean(props.user)){
            if(publication.accountId !== props.user.account.id){
                setViewed(true);
                if(!viewed){
                    post("http://localhost:8080/view/"+publication.id+"/"+props.user.account.id);
                    setNumViews(numViews+1);
                }
            }
        }
    }

    useEffect(()=>{
        initLike();
        initView();
    },[like]);

    return(
        Boolean(publication) ?
        <div className="pub-main">
            {
                Boolean(!props.hideUser) ?
                    <UserBar name={publication.name} accountId={publication.accountId} hide={props.hide} user={props.user}/>
                :<></>
            }
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
                <div className="pub-info-like" onClick={handleLike}>
                    <FaHeart style={{color:liked ? "red":"white"}}/>
                    <p>{FormatValue((Number(publication.likes)+numLikes))}</p>
                </div>
                <div className="pub-info-view">
                    <FaEye style={{color:viewed ? "rgb(89, 169, 211)":"white"}}/>
                    <p>{FormatValue((Number(publication.views)+numViews))}</p>
                </div>
                <div className="pub-info-open" >
                    <p onClick={handleView}>Ver</p>
                </div>
            </div>
        </div>
        :
        <></>
    );
}

export default Publication;