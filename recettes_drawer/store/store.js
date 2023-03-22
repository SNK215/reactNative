import { configureStore } from "@reduxjs/toolkit";
import favMeals from "./data.js";

export const store = configureStore({
    reducer : {
        favMeals : favMeals
    }
})