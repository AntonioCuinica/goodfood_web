import React from "react";
import SearchInput from "../components/searchInput";
import SearchResult from "../components/searchResult";
import Profile from "../img/profile.jpg"
import "./index.css"


const Search=()=>{
    return(
        <div className="search">
            <SearchInput/>
            <div className="search-filters">
                <p>Tudo</p>
                <p>Receita</p>
                <p>Conta</p>
            </div>
            <div className="search-results">
                <SearchResult img={Profile} name="Antonio Cuincia"/>
                <SearchResult img={Profile} name="Manuel Balião"/>
                <SearchResult img={Profile} name="Faira Rodriguez"/>
                <SearchResult img={Profile} name="Sumba Joaquim Mate"/>
            </div>
        </div>
    )
}

export default Search;