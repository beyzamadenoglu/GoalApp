import {createSlice} from "@reduxjs/toolkit";

const getInitialGoals = () => {
    const localList = window.localStorage.getItem('goalList');
    if(localList){
        return JSON.parse(localList);
    } 
    window.localStorage.setItem('goalList', JSON.stringify([]));
    return [];
}

const initialState = { 
    goalList: getInitialGoals(),
}

export const goalSlice = createSlice({
    name: 'goal',
    initialState: initialState,
    reducers: {
        addGoal:(state, action) => {
            state.goalList.push(action.payload);
            const goalList = window.localStorage.getItem('goalList');
            if(goalList){
                const goalListArr = JSON.parse(goalList);
                goalListArr.push({
                    ...action.payload,
                });
                window.localStorage.setItem('goalList', JSON.stringify(goalListArr));
            } else{
                window.localStorage.setItem('goalList', JSON.stringify([{...action.payload}]));
            }
        },

        deleteGoal:(state, action) => {
            
        }
    }
});

export const { addGoal } = goalSlice.actions;
export default goalSlice.reducer;