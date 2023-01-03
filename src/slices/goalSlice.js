import {createSlice} from "@reduxjs/toolkit";
import {
    getInitialGoals,
    isAvailableInLocalStorageInArray,
    removeItemLocalStorageInArray,
    operationItemtoLocalStorageInArray
} from '../utils/goal'

const GOAL_LIST = 'goalList';

const initialState = { 
    filter: "all",
    goalList: getInitialGoals(GOAL_LIST), 
}

export const goalSlice = createSlice({
    name: 'goal',
    initialState: initialState,
    reducers: {
        addGoal:(state, action) => {
            const goalListInState = state.goalList;
            const payload = action.payload
            
            goalListInState.push(payload);
            operationItemtoLocalStorageInArray(GOAL_LIST, goalListInState)
        },

        updateItem:(state, action) => {
            const parsedGoalListArray = JSON.parse(isAvailableInLocalStorageInArray(GOAL_LIST))
            const { id } = action.payload;
            
            const newGoalList = parsedGoalListArray && parsedGoalListArray.map(
                goal => goal.id === id 
                    ? goal = action.payload
                    : goal
                );
            
            state.goalList = newGoalList;
            operationItemtoLocalStorageInArray(GOAL_LIST, newGoalList)
        },

        deleteItem:(state, action) => {
            const goalListInState = state.goalList
            const removedGoal = removeItemLocalStorageInArray(GOAL_LIST)
            
            if(removedGoal) {
                const goalIndex = goalListInState.findIndex((goal)=> goal.id === removedGoal.id)
                goalListInState.splice(goalIndex, 1);
            }
        },

        updateFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { addGoal, deleteItem, updateFilter, updateItem } = goalSlice.actions;
export default goalSlice.reducer;