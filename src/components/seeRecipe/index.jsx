import React from "react";
import Button from "../button";
import Step from "../step";
import "./index.css";

const SeeRecipe=(props)=>{
    return(
        <div className="see-recipe" onClick={(e)=>e.stopPropagation()}>
            <div className="see-recipe-title">
                <h1>Frango a Zambeziana</h1>
            </div>
            <div className="see-recipe-containers">
                <div className="see-recipe-ingredients">
                    <h2>Ingredientes</h2>
                    <ul>
                        <li>1kg de Frango</li>
                        <li>2kg de Farinha de trigo</li>
                        <li>0.5 gramas de Salsa africana</li>
                        <li>Duas cebolas</li>
                        <li>Três tomates maduros e dois verdes</li>
                        <li>Azeite</li>
                    </ul>
                </div>
                <div className="see-recipe-steps">
                    <h2>Passos a seguir</h2>
                    <Step title="1o Passo" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. "/>
                    <Step title="2o Passo" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est odit veritatis animi quisquam fugit, culpa facilis numquam, voluptatem hic."/>
                    <Step title="3o Passo" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est odit veritatis an, voluptatem hic deserunt aspernatur excepturiimi."/>
                </div>
            </div>
            <div className="see-recipe-close" >
                <Button text="Fechar" onClick={()=>props.setModal({close:true,component:<></>})}/>
            </div>
        </div>
    )
}

export default SeeRecipe;