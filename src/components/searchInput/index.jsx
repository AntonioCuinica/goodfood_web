import React from "react";
import {IoSearch} from "react-icons/io5";
import "./index.css"

const SearchInput=()=>{
    return(
        <div className="search-input">
            <input
                type="text"
                placeholder="Pesquise por uma receita ou conta"
            />
            <div className="search-input-icon">
                <IoSearch/>
            </div>
        </div>
    )
}

export default SearchInput;