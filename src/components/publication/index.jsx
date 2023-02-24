import React from "react";
import Profile from "../../img/profile.jpg"
import MukapataImg from "../../img/prato1.png"
import {FaEye,FaHeart} from "react-icons/fa"
import "./index.css";
import UserBar from "../userBar";

const Publication=()=>{
    return(
        <div className="pub-main">
            <UserBar img={Profile}/>
            <div className="pub-recipe">
                <div className="pub-recipe-title">
        	        <p>Mukapata</p>
                </div>
                <div className="pub-recipe-img">
                    <img src={MukapataImg} alt="mukapata" title="mukapata"/>
                </div>
            </div>

            <div className="pub-info">
                <div className="pub-info-like">
                    <FaHeart/>
                    <p>2K</p>
                </div>
                <div className="pub-info-view">
                    <FaEye/>
                    <p>230</p>
                </div>
                <div className="pub-info-open">
                    <p>Ver</p>
                </div>
            </div>
        </div>
    );
}

export default Publication;