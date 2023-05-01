import React, { useState } from "react";
import {IoAdd, IoCloseOutline, IoImage} from "react-icons/io5";
import Button from "../button"
import "./index.css";

const NewRecipe=(props)=>{
    const [ingredients,setIngredients]=useState([]);
    const [ingredient,setIngredient]=useState("");
    const [steps,setSteps]=useState([]);
    const [step,setStep]=useState("");
    const [image,setImage]=useState("Escolha uma imagem/video")

    const addToListItems=(value,setSomethings,setSomething,arr)=>{
        if(Boolean(value)){
            setSomethings([value].concat(arr))
        }
        setSomething("")
    }

    const rmvFromTheListItems=(name,arr,setSomethings)=>{
        setSomethings(arr.filter(item=>item!==name))
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
                        <span className="new-recipe-right-icon" onClick={()=>addToListItems(ingredient,setIngredients,setIngredient,ingredients)}><IoAdd/></span>
                    </div>
                    {
                        ingredients.map(item=>{
                            return <div className="new-recipe-ingredient">
                                <p>{item}</p>
                                <span className="new-recipe-right-icon" onClick={()=>rmvFromTheListItems(item,ingredients,setIngredients)}><IoCloseOutline/></span>
                            </div>
                        })
                    }
                </div>
                <div className="new-recipe-steps">
                    <h2>Passos a seguir</h2>
                    <div className="new-recipe-input textarea">
                        <textarea placeholder="Indique um passo a seguir" value={step} onChange={(e)=>setStep(e.target.value)}></textarea>
                        <span className="new-recipe-right-icon" onClick={()=>addToListItems(step,setSteps,setStep,steps)}><IoAdd/></span>
                    </div>
                    {
                        steps.map(item=>{
                            return <div className="new-recipe-step">
                                <p>{item}</p>
                                <span className="new-recipe-right-icon" onClick={()=>rmvFromTheListItems(item,steps,setSteps)}><IoCloseOutline/></span>
                            </div>
                        })
                    }
                </div>
           </div>
           <div className="new-recipe-upload-media">
                <label>
                    <span className="new-recipe-right-icon"><IoImage/></span>
                    <span>
                        {       image.substring(image.lastIndexOf('\\')+1).length<=25 
                            ?
                                image.substring(image.lastIndexOf('\\')+1) 
                            :
                               "..."+image.substring(image.lastIndexOf('\\')+1).substring(image.substring(image.lastIndexOf('\\')+1).length-25)
                        }
                    </span>
                    <input type="file" name="preview" accept="image/*,video/*" onChange={e=>setImage(e.target.value)}/>
                </label>
                <button>Publicar receita</button>
           </div>
           <div className="new-recipe-close" >
                <Button text="Fechar" onClick={()=>props.setModal({close:true,component:<></>})}/>
            </div>
        </div>
    )
}

export default NewRecipe;