import React from "react";
import "./index.css"

const SearchResult=(props)=>{
    return(
        <div className="search-result">
            <div className="search-result-data">
                <img src={props.img} alt="result"/>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default SearchResult;