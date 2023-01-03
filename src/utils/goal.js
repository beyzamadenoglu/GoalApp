const getInitialGoals = (key) => {
    const localList = window.localStorage.getItem(key);
    if(localList){
        return JSON.parse(localList);
    } 
    window.localStorage.setItem(key, JSON.stringify([]));
    return [];
}

const isAvailableInLocalStorageInArray = (targetGoal) => {
    const goalList = window.localStorage.getItem(targetGoal);    
    return goalList 
        
}

const removeItemLocalStorageInArray = (targetGoalKey) => {
    const targetGoal = isAvailableInLocalStorageInArray(targetGoalKey);

    console.log(targetGoal)
    targetGoal && 
        window.localStorage.removeItem(targetGoalKey)

    return targetGoal
}

const operationItemtoLocalStorageInArray = (targetGoalKey, targetGoalValue, doYouWantDelete) => {
    const targetGoal = JSON.parse(isAvailableInLocalStorageInArray(targetGoalKey));
    if(targetGoal && doYouWantDelete) removeItemLocalStorageInArray(targetGoalKey) //delete

    targetGoal 
        && window.localStorage.setItem(targetGoalKey, JSON.stringify(targetGoalValue)) //update & create
}

export {
    getInitialGoals,
    isAvailableInLocalStorageInArray,
    removeItemLocalStorageInArray,
    operationItemtoLocalStorageInArray
}