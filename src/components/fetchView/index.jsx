import { useEffect, useState } from "react";

const FetchView=(URL)=>{
    const [view,setView]=useState([]);

    const searchViews= async ()=>{
        const response= await fetch(`${URL}`);
        const data= await response.json();
        setView(data);
    }

    useEffect(()=>{
        searchViews();
    },[URL]);

    return view;
}

export default FetchView;