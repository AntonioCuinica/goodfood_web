import React, { useEffect, useState } from "react";
import MukapataImg from "../../img/prato1.png"
import {FaEye,FaHeart} from "react-icons/fa"
import {IoStarOutline} from "react-icons/io5"
import "./index.css";
import UserBar from "../userBar";
import SeeRecipe from "../seeRecipe";
import FetchImage from "../fetchImage";
import FetchLike from "../fetchLike";

const Publication=(props)=>{
    const publication=props.publication;
    const image = Boolean(publication) ?FetchImage("http://localhost:8080/publication/image/"+publication.id) : "NotFound";
    const like = Boolean(publication) ?FetchLike("http://localhost:8080/like/all/"+publication.id) : [];
    const [numLikes,setNumLikes]=useState(0);

    const [liked,setLiked]=useState(false);

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
    
    const postLikes= async (URL)=>{
        const response= await fetch(`${URL}`,{method:"POST"});
        const data= await response.json();
        console.log(data);
    }

    const deleteLikes= async (URL)=>{
        const response= await fetch(`${URL}`,{method:"DELETE"});
        const data= await response.json();
        console.log(data);
    }

    const handleLike=()=>{
        
        if(Boolean(props.user)){
            if(publication.accountId !== props.user.account.id){
                setLiked(!liked);
                if(!liked){
                    postLikes("http://localhost:8080/like/"+publication.id+"/"+props.user.account.id);
                    setNumLikes(numLikes+1);
                }else if(Boolean(like)){
                
                    deleteLikes("http://localhost:8080/like/"+publication.id+"/"+props.user.account.id);
                    setNumLikes(numLikes-1);
                }
            }
        }
    } 

    useEffect(()=>{
        initLike();
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
                    <p>{(Number(publication.likes)+numLikes)}</p>
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