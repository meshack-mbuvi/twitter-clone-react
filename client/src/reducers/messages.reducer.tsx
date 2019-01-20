import { initialState } from "./initialState";
import { SET_MESSAGES } from "../actions/types";

export const Messages = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};
