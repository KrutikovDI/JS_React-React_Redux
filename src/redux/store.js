import { combineReducers, compose, legacy_createStore } from "redux";
import numberReducer from './numberReducer'

const ReacrReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      number: numberReducer,
    }),
    undefined,
    compose(
      ReacrReduxDevTools,
    )
  );
}

export default configureStore;