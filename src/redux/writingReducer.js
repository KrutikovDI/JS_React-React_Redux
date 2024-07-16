import { CHANGE_TEXT, CHANGE_PRICE, CHANGE_RECORDS, CHANGE_ID } from './actions';
import { v4 } from "uuid"

const initialState = {
  text: '',
  price: 0,
  id: '',
  records: []
};

const writingReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload
      }
    case CHANGE_PRICE:
      return {
        ...state,
        price: action.payload
      }
    case CHANGE_RECORDS:
      return {
        ...state,
        records: state.records.push(
          {
            text: state.text,
            prise: state.price,
            id: v4()
          }
        )
      }
    case CHANGE_ID:
      return{
        ...state,
        id: action.payload
      }
    default:
      return state;
  }
};

export default writingReducer