//lodash lib
import _ from "lodash";

import { CHARACTER_PARTS } from "../constants";

//character model
import Character from "../models/Character";

export const character = (
  state = new Character(
    CHARACTER_PARTS.HEAD0,
    CHARACTER_PARTS.BODY2,
    CHARACTER_PARTS.LEGS2
  ),
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
