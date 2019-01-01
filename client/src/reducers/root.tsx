import { combineReducers } from "redux";
import { User } from "./auth.reducer";
import { Twits } from "./twits.reducer";

export const rootReducer = combineReducers({
  userReducer: User,
  twitReducer: Twits
});
