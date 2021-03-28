import * as constants from '../constants/constants'
import { ITodo, IAddTodoAC } from './../../types/types';

const initialState: ITodo[] = [
  {
    text: 'Покушать кашки',
    id: 10,
    color: 'red',
    completed: false,
  },
  {
    text: 'Сделать домашку',
    id: 20,
    color: 'green',
    completed: true,
  },
]

export function todoReducer(state = initialState, action: IAddTodoAC) {
  const newState = [...state]
  switch (action.type) {
    case constants.ADD_TODO:
      newState.push(action.payload)
      return newState
    case constants.COMPLITED_CLICK:
      const i = newState.findIndex((el) => action.id === el.id)
      newState[i].completed = !newState[i].completed
      
      return newState
  
    default:
      return state
  }
}