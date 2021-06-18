export const counterReducer = (state = 0, action) => {
    console.log('reducer ran! Runs in the counterReducer right away while initial state created. Our action type is ', action.type)
    switch(action.type){
        case ("INCREASE"):
            return state + 1;
        case ("DECREASE"): 
            return state - 1;
        default: 
            return state
    }
}