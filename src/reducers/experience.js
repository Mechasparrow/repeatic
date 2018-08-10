import { ADD_XP } from "../constants";

export const experience = (state = 25, action) => {
  switch (action.type) {
    case ADD_XP:
      if (state + action.payload.task.xp <= 100) {
        return state + action.payload.task.xp;
      }
    default:
      return state;
  }
};
