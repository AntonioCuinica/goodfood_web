import React, { useState } from "react";
import Button from "../button"
import LoginImg from "../../img/login.jpg";
import { FaUser, FaLock } from 'react-icons/fa';
import "./index.css";


const Login=(props)=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    return(
        <div className="login" onClick={(e)=>e.stopPropagation()}>
           <div className="login-containers">
                <div className="login-logo">
                    <p>GoodFood</p>
                </div>
                <div className="login-img">
                    <img src={LoginImg} alt="login" />
                </div>
                <div className="login-inputs">
                    <div className="username">
                        <label htmlFor="username">
                            <FaUser />
                        </label>
                        <input type="text" id="username" maxLength={50} value={username} onChange={handleUsernameChange} placeholder="Username" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">
                            <FaLock />
                        </label>
                        <div>
                            <input type={'password'} id="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                        </div>
                    </div>
                    <div className="buttons">
                        <Button text="Entrar"/>
                        <Button text="Fechar" onClick={()=>props.setModal({close:true,component:<></>})}/>
                    </div>
                </div>
                <div className="login-extra">
                    <p>Esqueceu a sua senha ?</p>
                    <p>Criar nova conta</p>
                </div>
           </div>
        </div>
    )
}

export default Login;