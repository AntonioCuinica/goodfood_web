import { useEffect, useState } from "react";

const FetchImage=(URL)=>{
    const [image,setImage]=useState("NotFound");

    const imageFetch= async ()=>{
        const response= await fetch(`${URL}`);
        const data= await response.json();
        setImage(data.image);
    }

    useEffect(()=>{
        imageFetch();
    },[]);

    return image;
}

export default FetchImage;