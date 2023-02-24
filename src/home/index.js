import React from "react";
import AboutUser from "../components/aboutUser";
import Publication from "../components/publication";
import "./index.css";

const home=()=>{
    return(
        <div className="main">
            <div className="publications">
                <Publication/>
                <Publication/>
                <Publication/>
                <Publication/>
            </div>
            <div className="about">
               <AboutUser/>
            </div>
        </div>
    );
}

export default home;