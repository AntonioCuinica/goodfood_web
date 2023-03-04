import React from "react";
import "./index.css"

const Step=(props)=>{
    return(
        <div className="step">
            <h3>{props.title}</h3>
            <p>
                {props.message}
            </p>
        </div>
    )
}

export default Step;