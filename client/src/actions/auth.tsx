import { USER_PROFILE } from "./types";
import client from "./client";
import { toaster } from "evergreen-ui";

/**
 *
 * @param userData
 * @returns dispatch
 */
export const SignUp = (userData: any) => async (dispatch: any) => {
  try {
    if (userData.password !== userData.cPassword) {
      return toaster.danger("Passwords don't match", { duration: 5 });
    }

    await client.post("/signup", { ...userData });
    return toaster.success("Account created successfully");
  } catch (error) {
    return toaster.danger(error.response.data.message, { duration: 5 });
  }
};

export const SetUserProfile = (payload: any) => {
  return {
    type: USER_PROFILE,
    payload
  };
};

export const Login = (userData: any) => async (dispatch: any) => {
  try {
    const res = await client.post("/login", { ...userData });

    toaster.success(`Welcome back @${res.data.user.username}.`, {
      duration: 5
    });

    localStorage.setItem("token", res.data.user.token);

    return document.location.reload(true);
  } catch (error) {
    return toaster.danger(error.response.data.message, { duration: 5 });
  }
};

export const GetUserProfileData = () => async dispatch => {
  try {
    const res = await client.get("/user");
    dispatch(SetUserProfile(res.data));
  } catch (error) {
    return toaster.danger(error.response.data.message, { duration: 5 });
  }
};
