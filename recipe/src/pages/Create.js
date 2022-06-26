import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addRecipe} from '../reducer/recipeSlice';
import { useSelector } from 'react-redux';
import RecipiesCard from '../components/RecipeCard.js';
let id = 2;
const Create = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState('');
  const recipes_list = useSelector(state => state.recipes_list.list);
  console.log("before: "+recipes_list);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe({id: ++id, name, ingredients, description}));
    console.log(recipes_list);
    setName('');
    setIngredients([]);
    setDescription('');
    recipes_list.map((user) => (<RecipiesCard key={user.id} name={user.name} ingredients={user.ingredients} description={user.description}/>));
    console.log("after: "+recipes_list);
    window.location.href="http://localhost:3000/";
    

        // history.push({pathname: '/Home'});
  };

  return (
    <div className='create_div'>
      <form id='recipes_form'>
        <input type="text" id='form_name' value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required />
        <input type="text" id='form_ingredients' value={ingredients} placeholder="ingredients" onChange={(e) => setIngredients(e.target.value)} required/>
        <input type="text" id='form_description' value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} required/>
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
    
  )
}

export default Create