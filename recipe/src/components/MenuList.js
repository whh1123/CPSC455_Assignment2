import React from 'react';
import { useSelector } from 'react-redux';
import RecipiesCard  from './RecipeCard.js';

const MenuList = () => {
    const recipes_list = useSelector(state => state.recipes_list.list);
    
    return recipes_list.map((user) => (<RecipiesCard key={user.id} name={user.name} ingredients={user.ingredients} description={user.description}/>));
}

export default MenuList;

