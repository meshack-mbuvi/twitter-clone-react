import { combineReducers } from "redux";
import { User } from "./auth.reducer";
import { Twits } from "./twits.reducer";
import { Messages } from "./messages.reducer";

export const rootReducer = combineReducers({
  userReducer: User,
  twitReducer: Twits,
  messageReducer: Messages
});
