import React from "react";
import Button from "../button";
import Profile from "../../img/profile.jpg";
import "./index.css"
import FetchImage from "../fetchImage";
import FetchAccount from "../fetchAccount";

const UserBar=(props)=>{
    const name=props.name;
    const user =props.user;
    const accountId=props.accountId;
    const image=FetchImage("http://localhost:8080/account/image/"+accountId);
    
    const follow = (user, accountId) => {
        const uId = Boolean(user) ? user.account.id : -1;
        if (uId === accountId) {
          return false;
        }
        const account = FetchAccount(`http://localhost:8080/account/${accountId}`);
        if(!Boolean(account)){
            return false;
        }else{
            if(!Boolean(account.followers))return false;
        }

        if (Boolean(user)) {
          for (const item of user.account.following) {
            for (const elem of account.followers) {
              if (elem.id === item.id) {
                return false;
              }
            }
          }
        }
        return true;
      }

    const following=follow(user,accountId);
    
    return(
        <div className="publisher">
            <div className="pub-profile">
                <img src={image!=="NotFound" ? image : Profile} alt={name}/>
                <p>{name}</p>
            </div>
            <div className="pub-follow" style={{display:(Boolean(props.hide) || (!following))?"none":"flex"}} >
                <Button text="Seguir"/>
            </div>
        </div>
    )
}

export default UserBar;