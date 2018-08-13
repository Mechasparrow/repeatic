import {
  COMPLETE_TASK,
  FAILED_TASK,
  ADD_XP,
  CREATE_TASK,
  INVOKE_PENALTY
} from "../constants";

export const completedTask = (task, task_idx) => ({
  type: COMPLETE_TASK,
  payload: {
    task,
    task_idx
  }
});

export const completeTask = task_idx => {
  return (dispatch, getState) => {
    const { tasks } = getState();
    const completed_task = tasks[task_idx];

    dispatch(completedTask(completed_task, task_idx));
  };
};

export const invokePenalty = penalty => ({
  type: INVOKE_PENALTY,
  payload: {
    penalty
  }
});

//experience related actions

export const addXP = task => ({
  type: ADD_XP,
  payload: {
    task
  }
});

//task related actions

export const createTask = new_task => ({
  type: CREATE_TASK,
  payload: {
    new_task
  }
});
