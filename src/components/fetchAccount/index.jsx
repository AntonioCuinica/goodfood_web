import { useEffect, useState } from "react";

const FetchAccount=(URL)=>{
    const [account,setAccount]=useState([]);

    const searchAccounts= async ()=>{
        const response= await fetch(`${URL}`);
        const data= await response.json();
        setAccount(data);
    }

    useEffect(()=>{
        searchAccounts();
    },[]);

    return account;
}

export default FetchAccount;