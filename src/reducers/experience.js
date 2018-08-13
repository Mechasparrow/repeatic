import { ADD_XP, UPDATE_XP } from "../constants";

export const experience = (state = 25, action) => {
  switch (action.type) {
    case ADD_XP:
      if (state + action.payload.task.xp <= 100) {
        return state + action.payload.task.xp;
      }
    case UPDATE_XP:
      let { new_xp } = action.payload;
      return new_xp;
    default:
      return state;
  }
};
