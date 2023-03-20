import React from "react";
import Button from "../button"
import "./index.css";

const EditProfile=(props)=>{

    return(
        <div className="edit-profile" onClick={(e)=>e.stopPropagation()}>
            <div className="edit-profile-title">
                <h1>Editar perfil do usuario</h1>
            </div>
           <div className="edit-profile-containers">
                
           </div>
           <div className="edit-profile-close" >
                <Button text="Fechar" onClick={()=>props.setModal({close:true,component:<></>})}/>
            </div>
        </div>
    )
}

export default EditProfile;