import React, { useEffect, useState } from "react";
import AboutUser from "../components/aboutUser";
import Publication from "../components/publication";
import "./index.css";
import FetchPublication from "../components/fetchPublication";

const Home=(props)=>{
    const user=props.user;
    const publication=FetchPublication("http://localhost:8080/publication/view/all");

    return(
        <div className="home">
            <div className="home-publications">
                {
                    publication.map(pub=><Publication setModal={props.setModal} publication={pub}/>)
                }
            </div>
            <div className="home-about">
               <AboutUser setModal={props.setModal} user={user}/>
            </div>
        </div>
    );
}

export default Home;