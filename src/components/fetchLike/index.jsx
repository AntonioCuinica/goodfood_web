import { useEffect, useState } from "react";

const FetchLike=(URL)=>{
    const [like,setLike]=useState([]);

    const searchLikes= async ()=>{
        const response= await fetch(`${URL}`);
        const data= await response.json();
        setLike(data);
    }

    useEffect(()=>{
        searchLikes();
    },[URL]);


    return like;
}

export default FetchLike;