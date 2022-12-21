import { configureStore } from "@reduxjs/toolkit";
import goalReducer from '../slices/goalSlice';

export const store = configureStore({
    reducer: {
        goal: goalReducer,
    },
})