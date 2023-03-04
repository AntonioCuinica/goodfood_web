import React from "react";
import "./index.css";

const Modal=(props)=>{
    const modal=props.modal;
    const setModal=props.setModal
    return(
        <div className="modal" style={modal.close ? {"display":"none"}:{"display":"flex"}} onClick={()=>setModal({close:true,component:<></>})}>
            {modal.component}
        </div>
    )
}

export default Modal;