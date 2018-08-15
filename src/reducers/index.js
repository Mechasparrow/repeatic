import { combineReducers } from "redux";

import { categories } from "./categories";
import { health } from "./health";
import { experience } from "./experience";
import { level } from "./level";
import { tasks } from "./tasks";
import { failed_tasks } from "./failed_tasks";
import { completed_tasks } from "./completed_tasks";
import { recurring_tasks } from "./recurring_tasks";

export const rootReducer = combineReducers({
  health,
  experience,
  tasks,
  failed_tasks,
  categories,
  completed_tasks,
  recurring_tasks,
  level
});
