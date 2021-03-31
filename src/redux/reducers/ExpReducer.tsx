import { IExpAC, ITodoServer } from '../../types/types'
import * as constants from '../constants/constants'

type initialSt = {
  todo: ITodoServer[],
  loading: boolean,
}

const initialState: initialSt = {
  todo: [],
  loading: false,
}
export const ExpReducer = (state: initialSt = initialState, action: IExpAC) => {

  switch (action.type) {
    case constants.FETCH_START:
      return {
        ...state,
        loading: true,
      }
      
    case constants.FETCH_SUCCESS:
      return {
        ...state,
        todo: action.response,
        loading: false,
      }

    case constants.FETCH_ERROR:
      return state

  
    default:
      return state
  }
}