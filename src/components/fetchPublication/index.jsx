import { useEffect, useState } from "react";

const FetchPublication=(URL)=>{
    const [publication,setPublication]=useState([]);

    const searchPublications= async ()=>{
        const response= await fetch(`${URL}`);
        const data= await response.json();
        setPublication(data);
    }

    useEffect(()=>{
        searchPublications();
    },[]);


    return publication;
}

export default FetchPublication;