import * as constants from '../redux/constants/constants'

// Counter
export interface ICounter {
  counter: number
}
export interface ICounterAction {
  payload: number
  type: typeof constants.SUM | typeof constants.SUB | typeof constants.ADD_NUMBER
}

export type MenuItemElement = {
  path: string,
  icon: string,
  text: string,
}

// Todo

export interface ITodo {
  text: string,
  id: number,
  color: string,
  completed: boolean,
}

export interface IState {
  keyOne: ICounter,
  todo: ITodo
}

export interface IAddTodoAC {
  id: number
  payload: ITodo
  type: typeof constants.ADD_TODO | typeof constants.COMPLITED_CLICK | typeof constants.DELETE_TODO
}