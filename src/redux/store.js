import { combineReducers, compose, legacy_createStore } from "redux";
import writingReducer from './writingReducer'

const ReacrReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      writing: writingReducer,
    }),
    undefined,
    compose(
      ReacrReduxDevTools,
    )
  );
}

export default configureStore;