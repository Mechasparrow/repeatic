import {
  COMPLETE_TASK,
  FAILED_TASK,
  ADD_XP,
  CREATE_TASK,
  INCREMENT_LEVEL,
  UPDATE_XP,
  INVOKE_PENALTY
} from "../constants";
//health related actions

export const invokePenalty = penalty => ({
  type: INVOKE_PENALTY,
  payload: {
    penalty
  }
});

//experience related actions

export const addTaskXP = task => {
  return (dispatch, getState) => {
    var { xp } = task;
    dispatch(addXP(xp));
  };
};

export const incrementLevel = () => ({
  type: INCREMENT_LEVEL
});

export const addXP = added_xp => {
  return (dispatch, getState) => {
    var { experience } = getState();
    console.log(experience + added_xp);

    if (experience + added_xp > 100) {
      dispatch(incrementLevel());
      dispatch(updateXP(added_xp));
    } else {
      dispatch(updateXP(experience + added_xp));
    }
  };
};

export const updateXP = new_xp => ({
  type: UPDATE_XP,
  payload: {
    new_xp
  }
});

//task related actions
export const createTask = new_task => ({
  type: CREATE_TASK,
  payload: {
    new_task
  }
});

export const completedTask = (task, task_idx) => ({
  type: COMPLETE_TASK,
  payload: {
    task,
    task_idx
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

export const completeTask = task_idx => {
  return (dispatch, getState) => {
    const { tasks } = getState();
    const completed_task = tasks[task_idx];

    dispatch(completedTask(completed_task, task_idx));
  };
};
