import { connect } from 'react-redux'
import React from 'react'
import './Todo.scss'
import { IState, ITodo } from '../../types/types'
import TodoItem from '../TodoItem/TodoItem'
import { AddToDoAC, CompletedClickAC } from '../../redux/action/TodoAC'

const Todo = ({ todo, onAddTodo, onCompletedClick }: any) => {
  const newtodo = {
    text: 'Сделать Кашку',
    id: 30,
    color: 'yellow',
    completed: true,
  }

  // console.log(todo, onAddTodo)
  const todoItems = todo.map((obj: ITodo) => {
    return <TodoItem key={obj.id} onCompletedClick={onCompletedClick} itodo={obj} />
  })
  return (
    <div className="todo">
      <div className="block">
          { todoItems }
        <button onClick={() => onAddTodo(newtodo)} className="addTodo">
          <i className="fa fa-plus-square-o" />
          <span>Add todo</span>
        </button>
      </div>
    </div>
  ) 
}

const mapStateToProps = (state: IState) => {
  return {
    todo: state.todo,
  }
}

const mapDipatchToProps = (dispatch: any) => {
  return {
    onAddTodo: (newtodo: ITodo) => dispatch(AddToDoAC(newtodo)),
    onCompletedClick: (id: number) => dispatch(CompletedClickAC(id))
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Todo)