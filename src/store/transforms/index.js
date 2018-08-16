import { createTransform } from "redux-persist";

//lodash
import _ from "lodash";

//models for parsing and serialization
import Task from "../../models/Task";
import RecurringTask from "../../models/RecurringTask";
import Character from "../../models/Character";

export const taskTransform = createTransform(
  (inboundState, key) => {
    let tasks = inboundState;
    let serialized_tasks = _.map(tasks, function(task) {
      return task.serialize();
    });
    return serialized_tasks;
  },

  (outboundState, key) => {
    let raw_tasks = { ...outboundState };
    let parsed_tasks = _.map(raw_tasks, function(raw_task) {
      return Task.parse(raw_task);
    });
    return parsed_tasks;
  },

  { whitelist: ["tasks", "failed_tasks", "completed_tasks"] }
);

export const recurringTaskTransform = createTransform(
  (inboundState, key) => {
    let recurring_tasks = inboundState;
    let serialized_recurring_tasks = _.map(recurring_tasks, function(
      recurring_task
    ) {
      return recurring_task.serialize();
    });
    return serialized_recurring_tasks;
  },

  (outboundState, key) => {
    let raw_recurring_tasks = outboundState;
    let parsed_recurring_tasks = _.map(raw_recurring_tasks, function(
      raw_recurring_task
    ) {
      return RecurringTask.parse(raw_recurring_task);
    });
    return parsed_recurring_tasks;
  },

  { whitelist: ["recurring_tasks"] }
);

export const characterTransform = createTransform(
  (inboundState, key) => {
    let character = inboundState;
    let raw_character = character.serialize();
    return raw_character;
  },
  (outboundState, key) => {
    let raw_character = outboundState;
    return Character.parse(raw_character);
  },
  { whitelist: ["character"] }
);
