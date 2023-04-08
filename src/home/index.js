import React, { useEffect, useState } from "react";
import AboutUser from "../components/aboutUser";
import Publication from "../components/publication";
import "./index.css";

const Home=(props)=>{
    const URL="http://localhost:8080/publication/view/all";
    const [publication,setPublication]=useState([]);
    const searchPublications= async ()=>{
        const response= await fetch(`${URL}`);
        const data= await response.json();
        setPublication(data);
    }

    useEffect(()=>{
        searchPublications();
    },[]);

    return(
        <div className="home">
            <div className="home-publications">
                {
                    publication.map(pub=><Publication setModal={props.setModal} publication={pub}/>)
                }
            </div>
            <div className="home-about">
               <AboutUser setModal={props.setModal} user={null}/>
            </div>
        </div>
    );
}

export default Home;