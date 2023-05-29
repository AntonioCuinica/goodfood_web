import React, { useEffect, useState } from "react";
import Button from "../components/button";
import Publication from "../components/publication";
import ProfileFoto from "../img/profile.jpg";
import {IoAdd} from "react-icons/io5";
import "./index.css";
import NewRecipe from "../components/newRecipe";
import EditProfile from "../components/editProfile";
import FetchImage from "../components/fetchImage";
import FetchPublication from "../components/fetchPublication";
import FormatValue from "../components/formatValue";

const Profile=(props)=>{
    const account=Boolean(props.user) ? props.user.account : null;
    const image= Boolean(account) ? FetchImage("http://localhost:8080/account/image/"+account.id) : "NotFound";
    const [publication,setPublication] = useState([]);
    const numPubs=Boolean(account) ? FetchPublication("http://localhost:8080/publication/view/all/"+account.id).length : 0;
    const [tab,setTab]=useState("first");

    const fetchPublications= async (URL)=>{
        const response= await fetch(`${URL}`);
        const data= await response.json();
        setPublication(data);
    }

    useEffect(()=>{
        if(tab==="first"){
            fetchPublications("http://localhost:8080/publication/view/all/"+account.id);
        }else if(tab==="second"){
            fetchPublications("http://localhost:8080/publication/view/favorite/"+account.id);
        }
    },[tab]);

    return(
        Boolean(account) ?
        <div className="profile">
            <div className="profile-about">
                <img src={image!=="NotFound" ? image:ProfileFoto} alt={account.name+" "+account.surname}/>
                <p className="name">{account.name+" "+account.surname}</p>
                <div className="info">
                    <div className="data">
                        <p>{FormatValue(numPubs)}</p>
                        <p>Publicações</p>
                    </div>
                    <div className="data">
                        <p>{FormatValue(account.followers.length)}</p>
                        <p>Seguidores</p>
                    </div>
                    <div className="data">
                        <p>{FormatValue(account.following.length)}</p>
                        <p>Seguindo</p>
                    </div>
                </div>
                <Button text="Editar" onClick={()=>props.setModal({close:false,component:<EditProfile setModal={props.setModal} user={props.user}/>})}/>
            </div>
            <div className="profile-content">
                <div className="profile-content-tabs">
                    <p style={{"background-color":tab==="first" ?"rgb(152, 186, 215)":"transparent","border-bottom": tab==="first" ?"0.5vh solid black":"transparent"}} onClick={()=>setTab("first")}>Publicações</p>
                    
                    <p style={{"background-color":tab==="second" ?"rgb(152, 186, 215)":"transparent","border-bottom": tab==="second" ?"0.5vh solid black":"transparent"}} onClick={()=>setTab("second")}>Favoritos</p>
                </div>
                <button className="new-recipe-button" onClick={()=>props.setModal({close:false,component:<NewRecipe setModal={props.setModal} accountId={account.id}/>})} style={{"display":tab==="second" ? "none": "flex"}} >Publicar nova receita {<IoAdd/>}</button>
                <div className="profile-content-publications">
                    {
                        publication.map(pub=><div className="pub"><Publication setModal={props.setModal} publication={pub} hide={true} hideUser={tab==="first"} user={props.user}/></div>)
                    }
                </div>
            </div>
        </div>
        :
        <></>
    )
}

export default Profile;