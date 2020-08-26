import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import questionsReducer from "./question-reducer";

let redusers = combineReducers({
  questionBlock: questionsReducer
})

const store = createStore(redusers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;
