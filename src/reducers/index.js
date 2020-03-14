import { combineReducers } from "redux";
import { specializationsReducer } from "./specializations";
import { vacanciesReducer } from "./vacancies";

export const rootReducer = combineReducers({
  specializations: specializationsReducer,
  vacancies: vacanciesReducer
})
