import { combineReducers } from "redux"
import { ExpReducer } from "./ExpReducer"
import { todoReducer } from "./TodoReducer"

export default combineReducers({
  todo: todoReducer,
  exp: ExpReducer,
})
