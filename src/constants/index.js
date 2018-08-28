import * as durations from "./durations";
import * as characters from "./character";

export const TEST = "TEST";

//Actions for redux

//character related
export const UPDATE_CHARACTER = "UPDATE_CHARACTER";

//recurrence rates
export const DAILY = "DAILY";
export const WEEKLY = "WEEKLY";

//xp related
export const ADD_XP = "ADD_XP";
export const UPDATE_XP = "UPDATE_XP";
export const INCREMENT_LEVEL = "INCREMENT_LEVEL";

//task related
export const COMPLETE_TASK = "COMPLETE_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const FAILED_TASK = "FAILED_TASK";

//recurring task related
export const UPDATE_RECURRING_TASK_LAST_INSTANCE =
  "UPDATE_RECURRING_TASK_LAST_INSTANCE";
export const DELETE_RECURRING_TASK = "DELETE_RECURRING_TASK";
export const CREATE_RECURRING_TASK = "CREATE_RECURRING_TASK";

//health related
export const INVOKE_PENALTY = "INVOKE_PENALTY";

//moment durations
export const DURATIONS = durations;

//character parts
export const CHARACTER_PARTS = characters;
