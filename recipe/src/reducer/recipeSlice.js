import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    list: [
      { id: 1, name: 'Recipe1', ingredients: ["Spaghetti", "Tomato Sauce", "Cheese"], description : "delicious Spaghetti 1"},
      { id: 2, name: 'Recipe2', ingredients: ["Spaghetti", "Egg Sauce", "Cheese"], description : "delicious Spaghetti 2"}
    ]
  };

  const recipeSlice = createSlice({
      name: 'recipes_list',
      initialState: INITIAL_STATE,
      reducers :{
          addRecipe: (state, action) =>{
              state.list.push(action.payload)
          },
          removeAllRecipe: (state, action) =>{
            while(state.list.length !== 0){
                state.list.pop();
            }
          },
          removeARecipe: (state, action) =>{
            console.log(state.list);
            state.list.filter(card => state.list.list.id !== action.payload.id).map((list) => state.list);
            return{...state};
            // const cardToDelete = state.find(cardToDelete => cardToDelete.id === action.payload.id)
            // state.list.filter(card => state.list.id !== action.payload.id).map(recipes_list => (
            //   state.list.push(action.payload)
            // ))
          }
      },
  });

  export const { addRecipe, removeAllRecipe, removeARecipe } = recipeSlice.actions;

  export default recipeSlice.reducer;