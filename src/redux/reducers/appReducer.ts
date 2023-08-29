import { AnyAction } from "redux";

const INITIAL_STATE = {};

const AppReducer = (state = INITIAL_STATE, action: AnyAction) => {
 switch(action.type) {
   default:
    return state;
 }
}

export default AppReducer;