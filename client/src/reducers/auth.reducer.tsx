import { initialState } from "./initialState";
import { USER_PROFILE, REDIRECT } from "../actions/types";

export const User = (state = initialState.user, action: any) => {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    case REDIRECT:
      return {
        ...state,
        redirect: action.payload
      };

    default:
      return state;
  }
};
