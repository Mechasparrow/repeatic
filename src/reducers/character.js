//lodash lib
import _ from "lodash";

//character model
import Character from "../models/Character";

//character constants
import { UPDATE_CHARACTER, CHARACTER_PARTS } from "../constants";

export const character = (
  state = new Character(
    CHARACTER_PARTS.HEAD3,
    CHARACTER_PARTS.BODY2,
    CHARACTER_PARTS.LEGS2
  ),
  action
) => {
  switch (action.type) {
    case UPDATE_CHARACTER:
      let { new_character } = action.payload;
      return new_character;
    default:
      return state;
  }
};
