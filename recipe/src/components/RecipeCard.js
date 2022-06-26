import React from 'react';
import { useDispatch } from 'react-redux';
import {removeAllRecipe} from '../reducer/recipeSlice'
import { useState } from 'react';
import  Details  from './Details.js';
let Num = 0;
export const RecipiesCard = ({id, name, ingredients, description}) =>{
    const [showModal, setShowModal] = useState(false);
    const [des, setDes] = useState("");
    const dispatch = useDispatch();

    const ingredientsList = ingredients.map((item) => 
        <li key={name + ++Num}>{item}</li>
    );
    const openModal = () => {
        setDes(description);
        setShowModal(true);
        
    }
    
    // const handleADelete = (id) => {
    //     recipes_list.map(card => {
    //         // if this task has the same ID as the edited task
    //           if (id === id) {
    //             //
    //             return {...task, name: newName}
    //           }
    //           return task;
    // }

    const handleDelete = () => {
        dispatch(removeAllRecipe());
    }

    return (
        <div className='RecipieCard'>
            <h2 className="column-title">{ name }</h2>
            <div className="recipe-content">
                <h3>Ingredients</h3>
                <ul className="ingredients">
                    {ingredientsList}
                </ul>
                <div id="btn">
                    <button className="btn" value="Details" onClick={openModal}>Details</button>
                    
                    <button className="btn" value="Delete" onClick={() => { handleDelete() }}>Delete</button>
                    
                </div>

            </div>
            <Details 
                showModal={showModal}
                des={des}
                setShowModal={setShowModal}
            />
            </div>
    )
};

export default RecipiesCard;