import React, { useState } from "react";
import Button from "../button"
import LoginImg from "../../img/login.jpg";
import { FaUser, FaLock } from 'react-icons/fa';
import "./index.css";
import SignUp from "../signUp";


const Login=(props)=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage,setErrorMessage]=useState("");
    const [errorCount,setErrorCount]=useState();

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
 
    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(credentials)
        }).then(response => {
            if (!response.ok) {
              throw new Error("Usuario ou senha invalida");
            }
            return response.json();
          })
          .then(data => {
            setErrorMessage("Logado com sucesso");
            return data;
          })
          .catch(error => {
            setErrorCount(Boolean(errorCount) ? errorCount+1:1);
            setErrorMessage(error.message);
          });
    }

    const fetchUser = async (response) => {
        const URL = "http://localhost:8080/user/";
        return await fetch(`${URL + username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": response.body
            }
        }).then(data=>data.json());
    };



    const handleSubmit = async e => {
        e.preventDefault();
        const user_req = { username, password };
        const resp = await loginUser(user_req);
        if(Boolean(resp) ? resp.statusCode === "OK" : false){
            const data = await fetchUser(resp);
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('token', resp.body);
            props.setModal({close:true,component:<></>});
            window.location.reload(false);
        }
    }
  
    return(
        <form onSubmit={handleSubmit} className="login" onClick={(e)=>e.stopPropagation()}>
           <div className="login-containers">
                <div className="login-logo">
                    <p>GoodFood</p>
                </div>
                <div className="login-img">
                    <img src={LoginImg} alt="login" />
                </div>
                <label className="error-msg">{errorMessage} {errorCount}</label>
                <div className="login-inputs">
                    <div className="username">
                        <label htmlFor="username">
                            <FaUser />
                        </label>
                        <input type="text" id="username" maxLength={50} value={username} onChange={handleUsernameChange} placeholder="Username" required  onInvalid={e=>e.target.setCustomValidity("Escreva o nome de usuário")} onInput={e=>e.target.setCustomValidity('')}/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">
                            <FaLock />
                        </label>
                        <div>
                            <input type={'password'} id="password" value={password} onChange={handlePasswordChange} placeholder="Password" required onInvalid={e=>e.target.setCustomValidity("Escreva a senha do usuário")} onInput={e=>e.target.setCustomValidity('')}/>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button type="submit" text="Entrar"/>
                        <Button text="Fechar" onClick={()=>props.setModal({close:true,component:<></>})}/>
                    </div>
                </div>
                <div className="login-extra">
                    <p>Esqueceu a sua senha ?</p>
                    <p onClick={()=>props.setModal({close:false,component:<SignUp setModal={props.setModal}/>})} >Criar nova conta</p>
                </div>
           </div>
        </form>
    )
}

export default Login;