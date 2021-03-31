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
  exp : IExp
}

export interface IExp {
  loading: false,
  todo: ITodoServer[]
}
export interface ITodoServer {
  title: string
  completed: boolean
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

export interface IExpAC {
  response: ITodoServer[]
  type: typeof constants.FETCH_START | typeof constants.FETCH_SUCCESS | typeof constants.FETCH_ERROR
}