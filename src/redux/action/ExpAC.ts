import { ITodoServer } from './../../types/types';
import Axios from 'axios'
import * as constants from '../constants/constants';


export function fetchTodoStart() {
  return {
    type: constants.FETCH_START,
  }
}

export function fetchTodoSuccess(response: ITodoServer[]) {
  return {
    type: constants.FETCH_SUCCESS,
    response,
  }
}

export function fetchTodoError() {
  return {
    type: constants.FETCH_ERROR,
  }
}

export const fetchTodoAC = () => (
  async (dispatch: any) => {
    dispatch(fetchTodoStart())
    try {
      const response = await Axios.get(`https://remember-5b76f-default-rtdb.firebaseio.com/todo.json`)
      const key = Object.keys(response.data)
      const todo = response.data[key[0]]
      dispatch(fetchTodoSuccess(todo))
    } catch (error) {
      dispatch(fetchTodoError())
    }
  }
)
