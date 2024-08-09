import { CHANGE_RECORDS, CHANGE_ID } from './actions';
import { v4 } from "uuid"

const initialState = {
  text: '',
  price: 0,
  id: '',
  records: []
};

const writingReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_RECORDS:
      const newId = v4();
      const newRecords = state.records.concat(
        {
        text: action.payload.text,
        price: action.payload.price,
        id: newId
        }
      )
      return {
        ...state,
        id: newId,
        records: newRecords
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