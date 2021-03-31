import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './ExpReduxThunk.scss'
import { fetchTodoAC } from '../../../redux/action/ExpAC'
import { IExp, IState } from '../../../types/types'

type ExpReduxThunkProps = {
  fetchTodo: () => void,
  exp: IExp
}

const ExpReduxThunk = ({ fetchTodo, exp }: ExpReduxThunkProps) => {

  useEffect(() => {
    fetchTodo()
  }, [fetchTodo])
  return (
    <div>
      <h2>ExpReduxThunk</h2>
      <pre>{JSON.stringify(exp.todo)}</pre>
      <pre>{JSON.stringify(exp.loading)}</pre>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodo: () => dispatch(fetchTodoAC())
  }
}

const mapStateToProps = (state: IState) => {
  return {
    exp: state.exp
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpReduxThunk)
