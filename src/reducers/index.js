import { combineReducers } from "redux";

import { categories } from "./categories";
import { health } from "./health";
import { experience } from "./experience";
import { tasks } from "./tasks";
import { failed_tasks } from "./failed_tasks";

export const rootReducer = combineReducers({
  health,
  experience,
  tasks,
  failed_tasks,
  categories
});
