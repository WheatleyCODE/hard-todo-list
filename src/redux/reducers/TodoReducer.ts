import * as constants from '../constants/constants'
import { IAddTodoAC, ITodoCreator } from './../../types/types';

let ItiialState2: ITodoCreator[]
if (localStorage.getItem('AllTodo')) {
  ItiialState2 = JSON.parse(localStorage.getItem('AllTodo')!)
  console.log(ItiialState2)
} else {
  ItiialState2 = [
    {
      text: 'Покушать кашку',
      id: 10,
      color: 'red',
      completed: false,
      subTitle: 'Кушать очень важно!',
      textArea: 'Если не кушать можно умереть =(',
    },
    {
      text: 'Сделать домашку',
      id: 20,
      color: 'green',
      completed: true,
      subTitle: 'Математика =(',
      textArea: 'Очень сложно',
    },
  ]
}

export function todoReducer(state: ITodoCreator[] = ItiialState2, action: IAddTodoAC) {
  const newState = [...state]
  switch (action.type) {
    case constants.ADD_TODO:
      let newId
      if (newState.length) {
        newId = newState[newState.length - 1].id + 2
      } else {
        newId = 0
      }
        
      console.log(newId)
      action.payload.id = newId
      console.log(action.payload.id)
      newState.push(action.payload)
      localStorage.setItem('AllTodo', JSON.stringify(newState))
      return newState

    case constants.COMPLITED_CLICK:
      const i = newState.findIndex((el) => action.id === el.id)
      newState[i].completed = !newState[i].completed
      localStorage.setItem('AllTodo', JSON.stringify(newState))
      return newState

    case constants.DELETE_TODO: 
      const ind = newState.findIndex((el) => action.id === el.id)
      newState.splice(ind, 1)
      console.log(newState)
      localStorage.setItem('AllTodo', JSON.stringify(newState))
      return newState
    
    case constants.CHENGE_COLOR:
      const index = newState.findIndex((el) => action.id === el.id)
      newState[index].color = action.color
      localStorage.setItem('AllTodo', JSON.stringify(newState))
    return state

    case constants.CHANGE_TODO:
      const indexTODO = newState.findIndex((el) => el.id === action.payload.id)
      newState[indexTODO] = action.payload
      localStorage.setItem('AllTodo', JSON.stringify(newState))
      return newState
    
    default:
      return state
  }
}