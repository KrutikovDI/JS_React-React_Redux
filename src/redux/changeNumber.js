import { CHANGE_NUMBER, SET_USER_VALUE } from "./actions";

export const changeNumber = () => {
  return {
    type: CHANGE_NUMBER,
    // payload: number
  }
}

export const setUserValue = (payload) => {
  return {
    type: SET_USER_VALUE,
    payload
  }
}