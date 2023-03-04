import React, { useState } from "react";
import {IoAdd} from "react-icons/io5";
import "./index.css";

const NewRecipe=(props)=>{
    const [ingredients,setIngredients]=useState([]);
    const [ingredient,setIngredient]=useState("");

    function addIngredients(value){
        setIngredients(
        <div className="new-recipe-ingredient">
            <p>{value}</p>
        </div>)
    }

    return(
        <div className="new-recipe" onClick={(e)=>e.stopPropagation()}>
            <div className="new-recipe-title">
                <h1>Publicar nova receita</h1>
            </div>
           <div className="new-recipe-containers">
                <div className="new-recipe-ingredients">
                    <h2>Ingredientes</h2>
                    <div className="new-recipe-input">
                        <input type="text" placeholder="Indique um ingrediente da receita" value={ingredient} onChange={(e)=>setIngredient(e.target.value)}/>
                        <span onClick={()=>addIngredients(ingredient)}><IoAdd/></span>
                    </div>
                    {
                        ingredients.map(item=>item)
                    }
                </div>
                <div className="new-recipe-steps">
                    <h2>Passos a seguir</h2>
                </div>
           </div>
        </div>
    )
}

export default NewRecipe;