import client from "./client";
import { toaster } from "evergreen-ui";

// Action types
import { SET_TWITS } from "./types";

/**
 *
 * @param text : text for new twit
 * @returns dispatch(Alltwits())
 */
export const Newtwit = (text: string) => async dispatch => {
  try {
    await client.post("/tweets", {
      text
    });

    toaster.success("Twit created successfully", { duration: 5 });

    return dispatch(AllTwits());
  } catch (error) {
    return toaster.danger(error.Response.message, { duration: 5 });
  }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const SetTwits = (payload: any) => {
  return {
    type: SET_TWITS,
    payload
  };
};

/**
 * @param none
 * @returns dispatch(...) : a call to action creator
 */
export const AllTwits = () => async dispatch => {
  try {
    const res = await client.get("/tweets");

    return dispatch(SetTwits(res.data));
  } catch (error) {
    return toaster.danger("An error occurred while retrieving twits", {
      duration: 5
    });
  }
};
