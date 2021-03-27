import * as constants from '../redux/action/constants'

// Counter
export interface ICounter {
  counter: number
}
export interface ICounterAction {
  payload: number
  type: typeof constants.SUM | typeof constants.SUB | typeof constants.ADD_NUMBER
}