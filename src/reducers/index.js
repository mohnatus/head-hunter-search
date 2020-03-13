import { combineReducers } from "redux";
import { specializationsReducer } from "./specializations";

export const rootReducer = combineReducers({
  specializations: specializationsReducer
})