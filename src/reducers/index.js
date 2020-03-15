import { combineReducers } from "redux";
import { vacanciesReducer } from "./vacancies";
import { filtersReducer } from "./filters";
import { specializationsReducer } from "./specializations";

export const rootReducer = combineReducers({
  vacancies: vacanciesReducer,
  filters: filtersReducer,
  specializations: specializationsReducer,
})
