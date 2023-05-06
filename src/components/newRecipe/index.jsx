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
    const [imageSelected,setImageSelected]=useState(null);
    const accountId=props.accountId;
    const [recipeName,setRecipeName]=useState("");
    const [recipeDesc,setRecipeDesc]=useState("");

    const addToListItems=(value,setSomethings,setSomething,arr)=>{
        if(Boolean(value)){
            setSomethings([value].concat(arr))
        }
        setSomething("")
    }

    const rmvFromTheListItems=(name,arr,setSomethings)=>{
        setSomethings(arr.filter(item=>item!==name))
    }

    const imageHandle=(e)=>{
        setImage(e.target.value);
        setImageSelected(e.target.files[0]);
    }

    async function publishRecipe(recipe){
        return fetch('http://localhost:8080/publication/'+accountId, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(recipe)
        }).then(response => {
            return response.json();
        }).then(data => {
            return data;
        });
    }

    async function publicationImage(publicationId){
        const formData = new FormData();
        formData.append("image", imageSelected);
        return await fetch('http://localhost:8080/publication/image/'+publicationId, {
          method: 'POST',
          body: formData
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const recipe = {
            "name":recipeName,
            "description":recipeDesc,
            "ingredients":ingredients.reverse().map(item=>{
                return {
                    "name":item
                }
            }),
            "steps":steps.reverse().map((item,index)=>{
                return {
                    "detail":item,
                    "number":(index+1)
                }
            })
        }
        if((ingredients.length>0 || steps.length>0) && (Boolean(recipeName) && accountId>0) && (image!=="Escolha uma imagem/video")){
            const resp = await publishRecipe(recipe);
            if(Boolean(resp) ? resp.id > 0 : false){
                if(image!=="Escolha uma imagem/video"){
                   await publicationImage(resp.id);
                }
                props.setModal({close:true,component:<></>});
                window.location.reload(false);
            }
        }
    }

    return(
        <form onSubmit={handleSubmit} className="new-recipe" onClick={(e)=>e.stopPropagation()}>
            <div className="new-recipe-title">
                <h1>Publicar nova receita</h1>
            </div>
            <div className="new-recipe-information">
                <input type="text"  placeholder="Nome da receita" minLength={3} maxLength={30} required onInvalid={e=>e.target.setCustomValidity("Escreva o nome da receita")} onInput={e=>e.target.setCustomValidity('')} onChange={e=>setRecipeName(e.target.value)}/>
                <textarea  placeholder="Descrição da receita" onChange={e=>setRecipeDesc(e.target.value)} ></textarea>            
            </div>
           <div className="new-recipe-containers">
                <div className="new-recipe-ingredients">
                    <h2>Ingredientes</h2>
                    <div className="new-recipe-input">
                        <input type="text" placeholder="Indique um ingrediente da receita" value={ingredient} onChange={(e)=>setIngredient(e.target.value)} />
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
                    <input type="file" name="preview" accept="image/*,video/*" onChange={imageHandle}/>
                </label>
                <input type="submit" value={"Publicar receita"} />
           </div>
           <div className="new-recipe-close" >
                <Button text="Fechar" onClick={()=>props.setModal({close:true,component:<></>})}/>
            </div>
        </form>
    )
}

export default NewRecipe;