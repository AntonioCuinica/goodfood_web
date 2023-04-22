import React, { useEffect, useState } from "react";
import AboutUser from "../components/aboutUser";
import Publication from "../components/publication";
import "./index.css";
import FetchPublication from "../components/fetchPublication";
import FetchAccount from "../components/fetchAccount";

const Home=(props)=>{
    const user=props.user;
    const publication=FetchPublication("http://localhost:8080/publication/view/all");
    const accountId=Boolean(user) ? user.account.id : 0;
    const sugestion=FetchAccount(`http://localhost:8080/account/all/popular/${accountId}`);

    return(
        <div className="home">
            <div className="home-publications">
                {
                    publication.map(pub=><Publication setModal={props.setModal} publication={pub} hide={!Boolean(user)} user={user}/>)
                }
            </div>
            <div className="home-about">
               <AboutUser setModal={props.setModal} user={user} sugestion={sugestion}/>
            </div>
        </div>
    );
}

export default Home;