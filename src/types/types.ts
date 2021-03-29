import * as constants from '../redux/constants/constants'

// Menu
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
  todo: ITodoCreator
}

export interface IAddTodoAC {
  color: string
  id: number
  payload: ITodoCreator
  type: typeof constants.ADD_TODO | typeof constants.COMPLITED_CLICK | typeof constants.DELETE_TODO | typeof constants.CHENGE_COLOR | typeof constants.CHANGE_TODO
}

export interface ITodoCreator extends ITodo {
  subTitle: string
  textArea: string
}