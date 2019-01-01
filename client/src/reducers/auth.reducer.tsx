import { initialState } from "./initialState";
import { USER_PROFILE } from "../actions/types";

export const User = (state = initialState.user, action: any) => {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};
