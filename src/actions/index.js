import { COMPLETE_TASK, ADD_XP } from "../constants";

export const completeTask = task_idx => ({
  type: COMPLETE_TASK,
  payload: {
    task_idx
  }
});

export const addXP = task => ({
  type: ADD_XP,
  payload: {
    task
  }
});
