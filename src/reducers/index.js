import { combineReducers } from "redux";

import { categories } from "./categories";
import { health } from "./health";
import { experience } from "./experience";
import { tasks } from "./tasks";

export const rootReducer = combineReducers({
  health,
  experience,
  tasks,
  categories
});
