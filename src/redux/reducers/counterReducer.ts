import { ICounter, ICounterAction } from './../../types/types';
import * as constants from '../constants/constants'

const initialState = {
  counter: 0
}

export function counterReducer(state:ICounter = initialState, action: ICounterAction) {

  switch (action.type) {
    case constants.SUM:
      return {
        counter: state.counter + 1
      }
    case constants.SUB:
      return {
        counter: state.counter - 1
      }
    case constants.ADD_NUMBER:
      return {
        counter: state.counter + action.payload
      }
    default:
      return state
  }
}