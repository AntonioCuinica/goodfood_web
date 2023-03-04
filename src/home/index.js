import React from "react";
import AboutUser from "../components/aboutUser";
import Publication from "../components/publication";
import "./index.css";

const home=(props)=>{
    return(
        <div className="home">
            <div className="home-publications">
                <Publication setModal={props.setModal}/>
                <Publication setModal={props.setModal}/>
                <Publication setModal={props.setModal}/>
                <Publication setModal={props.setModal}/>
            </div>
            <div className="home-about">
               <AboutUser/>
            </div>
        </div>
    );
}

export default home;