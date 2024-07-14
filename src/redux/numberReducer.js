import { CHANGE_NUMBER, SET_USER_VALUE } from './actions';

const initialState = {
  value: 0,
  userValue: 0
};

const numberReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_NUMBER:
      return {
        ...state,
        value: state.value + Number(state.userValue)
      }
    case SET_USER_VALUE:
      return {
        ...state,
        userValue: action.playload
      }
    default:
      return state;
  }
};

export default numberReducer