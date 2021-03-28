import { combineReducers } from "redux"
import { counterReducer } from "../reducers/counterReducer"
import { todoReducer } from "./TodoReducer"

export default combineReducers({
  keyOne: counterReducer,
  todo: todoReducer,
})
