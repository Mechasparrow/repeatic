import { COMPLETE_TASK, ADD_XP, CREATE_TASK } from "../constants";

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

export const createTask = new_task => ({
  type: CREATE_TASK,
  payload: {
    new_task
  }
});
