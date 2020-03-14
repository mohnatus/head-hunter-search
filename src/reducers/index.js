import { combineReducers } from "redux";
import { vacanciesReducer } from "./vacancies";
import { filtersReducer } from "./filters";

export const rootReducer = combineReducers({
  vacancies: vacanciesReducer,
  filters: filtersReducer,
})
