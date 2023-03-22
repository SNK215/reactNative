import { createSlice } from "@reduxjs/toolkit";

const favMeals = createSlice({
    name : 'favMeals',
    initialState : {
        meals : []
    },
    reducers : {
        addMeal : (state,action) => {
            state.meals.push(action.payload)
        },
        removeMeal : (state,action) => {
            state.meals.splice(state.meals.indexOf(action.payload),1)

        }
    }
})


export const addMeal = favMeals.actions.addMeal;
export const removeMeal = favMeals.actions.removeMeal;
export default favMeals.reducer;