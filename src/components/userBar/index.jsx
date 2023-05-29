import React, { useEffect, useState } from "react";
import Button from "../button";
import Profile from "../../img/profile.jpg";
import "./index.css"
import FetchImage from "../fetchImage";

const UserBar=(props)=>{
    const name=props.name;
    const [user,setUser]=useState(props.user);
    const [accountId,setAccountId]=useState(props.accountId);
    const image=FetchImage("http://localhost:8080/account/image/"+accountId);
    const [following,setFollowing]=useState(false);
    const [account,setAccount]=useState({});

    function follow(){
        if(!(Boolean(user) && Boolean(account))){
            setFollowing(false);
        }
        else if(user.account.id === account.id){
            setFollowing(false);
        }else if(!Boolean(account.followers)){
            setFollowing(true);
        } else {
            fetchUser(user.username);
            user.account.following.forEach(item => {
              account.followers.forEach(elem => {
                if (elem.id === item.id) {
                  setFollowing(false);
                }
              });
            });
        }
    }
    
    const fetchAccount= async ()=>{
        const response= await fetch(`http://localhost:8080/account/${accountId}`,{method:"GET"});
        const data= await response.json();
        setAccount(data); 
    }

    const fetchUser= async (username)=>{
        const response= await fetch(`http://localhost:8080/user/${username}`,{method:"GET"});
        const data= await response.json();
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data)); 
    }

    const post= async (URL)=>{
        await fetch(`${URL}`,{method:"POST"});
        setFollowing(false);
    }

    const followAccount=()=>{
        if (Boolean(user)) {
            post("http://localhost:8080/follow/"+accountId+"/"+user.account.id);
            follow();
        }
    }

    useEffect(()=>{
        fetchAccount();
    }, [accountId]);

    useEffect(()=>{
        setAccountId(props.accountId);
    },[props.accountId]);

    useEffect(()=>{
        if(Boolean(user)){
            fetchUser(user.username);
        }
    }, []);

    useEffect(()=>{
        follow();
    }, [account]);

    return(
        <div className="publisher">
            <div className="pub-profile">
                <img src={image!=="NotFound" ? image : Profile} alt={name}/>
                <p>{name}</p>
            </div>
            <div className="pub-follow" style={{display:(Boolean(props.hide) || (!following))?"none":"flex"}} >
                <Button text="Seguir" onClick={followAccount}/>
            </div>
        </div>
    )
}

export default UserBar;
