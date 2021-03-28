import { connect } from 'react-redux'
import React from 'react'
import './Todo.scss'
import { IState, ITodo } from '../../types/types'
import TodoItem from '../TodoItem/TodoItem'

const Todo = ({ todo, onTodo }: any) => {
  console.log(todo)
  const todoItems = todo.map((obj: ITodo) => {
    return <TodoItem key={obj.id} text={obj.text} id={obj.id} color={obj.color} completed={obj.completed} />
  })
  return (
    <div className="todo">
      <div className="block">
        { todoItems }
        <button className="addTodo">
          <i className="fa fa-plus" />
        </button>
      </div>
    </div>
  ) 
}

const mapStateToProps = (state: IState) => {
  return {
    todo: state.todo
  }
}

const mapDipatchToProps = (dispatch: any) => {
  console.log(dispatch)
  return {
    onTodo: dispatch(() => {})
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Todo)