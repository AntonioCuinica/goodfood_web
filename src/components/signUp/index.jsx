import React from "react";
import Button from "../button"
import { FaUser,FaRegCalendarAlt,FaPhone,FaEnvelope} from 'react-icons/fa';

import "./index.css";
import Login from "../login";


const SignUp=(props)=>{
    return(
        <div className="signup" onClick={(e)=>e.stopPropagation()}>
           <div className="signup-containers">
                <div className="signup-logo">
                    <p>GoodFood</p>
                </div>
                <div className="signup-inputs">
                    <div className="field name">
                        <label htmlFor="name">
                            <FaUser/>
                        </label>
                        <input type="text" id="name" placeholder="Nome" />
                    </div>
                    <div className="field surname">
                        <label htmlFor="surname">
                            <FaUser/>
                        </label>
                        <input type="text" id="surname" placeholder="Apelido" />
                    </div>
                    <div className="field birthday">
                        <label htmlFor="birthday">
                            <FaRegCalendarAlt/>
                        </label>
                        <input type="date" id="birthday" placeholder="Nascimento" />
                    </div>
                    <div className="field email">
                        <label htmlFor="email">
                            <FaEnvelope/>
                        </label>
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="field tel">
                        <label htmlFor="tel">
                            <FaPhone/>
                        </label>
                        <input type="tel" id="tel" placeholder="Telefone" />
                    </div>
                    <div className="field buttons">
                        <Button text="Criar"/>
                        <Button text="Cancelar" onClick={()=>props.setModal({close:true,component:<></>})}/>
                    </div>
                </div>
           </div>
           <div className="signup-extra">
                <p  onClick={()=>props.setModal({close:false,component:<Login setModal={props.setModal}/>})}>Fazer login</p>
            </div>
        </div>
    )
}

export default SignUp;