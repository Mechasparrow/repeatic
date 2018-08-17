//lodash
import _ from "lodash";

import {
  COMPLETE_TASK,
  FAILED_TASK,
  ADD_XP,
  CREATE_TASK,
  INCREMENT_LEVEL,
  UPDATE_XP,
  INVOKE_PENALTY,
  UPDATE_RECURRING_TASK_LAST_INSTANCE,
  UPDATE_CHARACTER
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

    var xp_sum = experience + added_xp;

    if (xp_sum > 100) {
      var levels = Math.floor(xp_sum / 100);
      var left_over_xp = xp_sum % 100;

      for (var i = 0; i < levels; i++) {
        dispatch(incrementLevel());
      }
      dispatch(updateXP(left_over_xp));
    } else {
      dispatch(updateXP(xp_sum));
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

//TODO finish me
export const checkRecurringTasks = current_time => {
  return (dispatch, getState) => {
    var { recurring_tasks } = getState();

    var recurring_task_ids = _.map(recurring_tasks, function(t, i) {
      return i;
    });

    var task_to_spawn_ids = [];

    var recurring_tasks_to_spawn = _.filter(recurring_tasks, function(
      recurring_task,
      idx
    ) {
      if (recurring_task.checkRecurrence(current_time)) {
        task_to_spawn_ids.push(idx);
        return true;
      }
    });

    var spawned_tasks = _.map(recurring_tasks_to_spawn, function(
      recurring_task
    ) {
      var new_task = recurring_task.spawn_task();

      dispatch(createTask(new_task));
    });

    _.map(task_to_spawn_ids, function(recurring_task_id) {
      dispatch(
        updateRecurringTaskLastInstance(recurring_task_id, current_time)
      );
    });
  };
};

// TODO update recurring task
export const updateRecurringTaskLastInstance = (
  recurring_task_idx,
  last_instance
) => ({
  type: UPDATE_RECURRING_TASK_LAST_INSTANCE,
  payload: {
    recurring_task_idx,
    last_instance
  }
});

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

//character actions
export const updateCharacter = new_character => ({
  type: UPDATE_CHARACTER,
  payload: {
    new_character
  }
});
