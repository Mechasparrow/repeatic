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

export const failedTask = (task, task_idx) => ({
  type: FAILED_TASK,
  payload: {
    task,
    task_idx
  }
});

export const failTask = task_idx => {
  return (dispatch, getState) => {
    const { tasks } = getState();
    const failed_task = tasks[task_idx];

    dispatch(failedTask(failed_task, task_idx));
    dispatch(invokePenalty(failed_task.penalty));
  };
};

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
