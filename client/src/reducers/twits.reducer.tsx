import { initialState } from "./initialState";
import { SET_TWITS } from "../actions/types";

export const Twits = (state = initialState, action) => {
  switch (action.type) {
    case SET_TWITS:
      return {
        ...state,
        twits: action.payload
      };

    default:
      return state;
  }
};
