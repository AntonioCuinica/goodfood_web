import React, { useEffect } from "react";
import Button from "../button"
import Profile from "../../img/profile.jpg"
import "./index.css";
import FetchImage from "../fetchImage";
import { IoImage } from "react-icons/io5";
import { useState } from "react";

const EditProfile=(props)=>{
    const [user,setUser]=useState(props.user);
    const account=Boolean(user) ? user.account:null;
    const image=Boolean(account) ? FetchImage("http://localhost:8080/account/image/"+account.id) : "NotFound";
    const [img,setImg]=useState("Trocar foto")
    const [imageSelected,setImageSelected]=useState();
    const [name,setName]=useState(account.name);
    const [surname,setSurname]=useState(account.surname);
    const [cell,setCell]=useState(account.cell);
    const [email,setEmail]=useState(account.email);
    const [username,setUsername]=useState(user.username);
    const [newPassword,setNewPassword]=useState("");

    const imageHandle=(e)=>{
        setImg(e.target.value);
        setImageSelected(e.target.files[0]);
    }

    async function accountImage(accountId){
        const formData = new FormData();
        formData.append("image", imageSelected);
        return fetch('http://localhost:8080/account/image/'+accountId, {
          method: 'POST',
          body: formData
        });
    }

    const updateAccount=async (acc)=>{
        return fetch('http://localhost:8080/account/'+account.id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(acc)
          }).then(response => {
              return response.json();
          }).then(data => {
              return data;
          });
    }

    const updateUser=async (usr)=>{
        return fetch('http://localhost:8080/user/'+user.id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(usr)
          }).then(response => {
              return response.json();
          }).then(data => {
              return data;
          });
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const newAccount={
            "id":account.id,
            "name":name,
            "surname":surname,
            "cell":cell,
            "email":email,
        }

        const newUser={
            "id":user.id,
            "username":username,
            "password":newPassword
        }

        const newUser2={
            "id":user.id,
            "username":username
        }

        await updateAccount(newAccount);
        if(Boolean(imageSelected)) await accountImage(account.id);
        const usr =await updateUser(Boolean(newPassword) ?newUser:newUser2);
        setUser(usr);
        localStorage.setItem('user', JSON.stringify(user));
        props.setModal({close:true,component:<></>});
        window.location.reload(false);
    }

    return(
        <form className="edit-profile" onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()}>
            <div className="edit-profile-title">
                <h1>Editar perfil do usuario</h1>
            </div>
           <div className="edit-profile-containers">
                <div className="edit-profile-cont info1">
                    <label className="profile-info" htmlFor="edit-profile-name">
                        Nome
                        <input type="text" id="edit-profile-name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </label>
                    <label className="profile-info" htmlFor="edit-profile-surname">
                        Apelido
                        <input type="text" id="edit-profile-surname" value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                    </label>
                    <label className="profile-info" htmlFor="edit-profile-tel">
                        Telefone
                        <input type="tel" id="edit-profile-tel" value={cell} onChange={(e)=>setCell(e.target.value)}/>
                    </label>
                    <label className="profile-info" htmlFor="edit-profile-name">
                        Email
                        <input type="email" id="edit-profile-name" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className="edit-profile-cont info2">
                    <div className="edit-profile-img">
                        <img src={img!=="Trocar foto" ? URL.createObjectURL(imageSelected):(image!=="NotFound" ? image:Profile)} alt={account.name}/>
                        <label className="myFile">
                            <span className="new-recipe-right-icon"><IoImage/></span>
                            <span>
                                {      img.substring(img.lastIndexOf('\\')+1).length<=25 
                                    ?
                                        img.substring(img.lastIndexOf('\\')+1) 
                                    :
                                    "..."+img.substring(img.lastIndexOf('\\')+1).substring(img.substring(img.lastIndexOf('\\')+1).length-25)
                                }
                            </span>
                            <input type="file" name="preview" accept="image/*" onChange={imageHandle}/>
                        </label>
                    </div>
                    <label className="profile-info" htmlFor="edit-profile-user">
                        Username
                        <input type="text" id="edit-profile-user" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </label>
                    <label className="profile-info" htmlFor="edit-profile-newpsw">
                        Password
                        <input type="password" id="edit-profile-newpsw" onChange={(e)=>setNewPassword(e.target.value)}/>
                    </label>
                </div>
            </div>
            <div className="edit-profile-close" >
                <Button text="Cancelar" onClick={()=>props.setModal({close:true,component:<></>})}/>
                <Button text="Salvar" type="submit"/>
            </div>
        </form>
    )
}

export default EditProfile;