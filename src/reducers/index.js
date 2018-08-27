import { combineReducers } from "redux";

//import the other reducers
import { categories } from "./categories";
import { health } from "./health";
import { experience } from "./experience";
import { level } from "./level";
import { tasks } from "./tasks";
import { failed_tasks } from "./failed_tasks";
import { completed_tasks } from "./completed_tasks";
import { recurring_tasks } from "./recurring_tasks";
import { preset_tasks } from "./preset_tasks";

import { character } from "./character";

export const rootReducer = combineReducers({
  health,
  experience,
  character,
  tasks,
  failed_tasks,
  preset_tasks,
  categories,
  completed_tasks,
  level
});
