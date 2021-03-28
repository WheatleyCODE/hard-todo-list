import * as constants from '../constants/constants'

export function SumAC() {
  return {
    type: constants.SUM
  }
}

export function SubAC() {
  return {
    type: constants.SUB
  }
}

export function AddNumberAC(num: number) {
  return {
    type: constants.ADD_NUMBER,
    payload: num
  }
}

export function AddAsyncAC(num: number) {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(AddNumberAC(num))
    }, 3000)
  }
}
