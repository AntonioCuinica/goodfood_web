import React, { useEffect, useState } from "react";
import Button from "../button";
import Step from "../step";
import "./index.css";

const SeeRecipe=(props)=>{

    const URL="http://localhost:8080/recipe/";
    const recipeId=props.recipeId;
    const [recipe,setRecipe]=useState({});
    const [ingredients,setIngredients]=useState([]);
    const [steps,setSteps]=useState([]);

    const fetchRecipe=async ()=>{
        const response= await fetch(`${URL+recipeId}`);
        const data= await response.json();
        setRecipe(data);
    }

    useEffect(()=>{
        fetchRecipe();
    },[]);

    useEffect(()=>{
        Boolean(recipe.ingredients) ? setIngredients(recipe.ingredients) : setIngredients([]);
        Boolean(recipe.steps) ? setSteps(recipe.steps) : setSteps([]);
    },[recipe]);
    

    return(
        <div className="see-recipe" onClick={(e)=>e.stopPropagation()}>
            <div className="see-recipe-title">
                <h1>{recipe.name}</h1>
            </div>
            <div className="see-recipe-containers">
                <div className="see-recipe-ingredients">
                    <h2>Ingredientes</h2>
                    <ul>
                        {
                            ingredients.length === 0 
                               ?
                                    <li>Nenhum ingrediente encontrado</li>
                               :
                                    ingredients.map(item=><li>{item.name}: <i>{item.description}</i></li>)
                        }
                    </ul>
                </div>
                <div className="see-recipe-steps">
                    <h2>Passos a seguir</h2>
                        {
                            steps.length === 0 
                                ?
                                    <Step title="" message="Nenhun passo encontrado"/>
                                :
                                    steps.sort((item1,item2)=>{
                                        return item1.number>item2.number ? 1:(item1.number<item2.number ? -1 : 0)
                                    }).map(item=><Step title={<>{item.number}<sup>o</sup> passo</>} message={item.detail}/>)
                        }  
                </div>
            </div>
            <div className="see-recipe-close" >
                <Button text="Fechar" onClick={()=>{props.setModal({close:true,component:<></>});}}/>
            </div>
        </div>
    )
}

export default SeeRecipe;