import { ITodoCreator } from './../../types/types';
import * as constants from '../constants/constants'

export function AddToDoAC(newTodo: ITodoCreator) {
  return {
    type: constants.ADD_TODO,
    payload: newTodo,
  }
}

export function ChangeTodoAC(newTodo: ITodoCreator) {
  return {
    type: constants.CHANGE_TODO,
    payload: newTodo
  }
}

export function CompletedClickAC(id: number) {
  return {
    type: constants.COMPLITED_CLICK,
    id,
  }
}

export function DeleteTodoAC(id: number) {
  return {
    type: constants.DELETE_TODO,
    id,
  }
}

export function ChangeColorAC(id: number, color: string) {
  return {
    type: constants.CHENGE_COLOR,
    id,
    color,
  }
}
