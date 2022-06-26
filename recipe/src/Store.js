import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './reducer/recipeSlice';

export const store = configureStore({
    reducer: {
        recipes_list: recipesReducer
    },
    devTools: true
  });