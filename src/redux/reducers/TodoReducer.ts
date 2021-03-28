import { ITodo } from './../../types/types';

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

export function todoReducer(state = initialState, action: any) {
  return state
}