import { connect } from 'react-redux'
import React from 'react'
import './Todo.scss'
import { IState, ITodo } from '../../types/types'
import TodoItem from '../TodoItem/TodoItem'
import { AddToDoAC, ChangeColorAC, CompletedClickAC, DeleteTodoAC } from '../../redux/action/TodoAC'

const Todo = ({ todo, onAddTodo, onCompletedClick, onDeleteTodo, onChangeColor }: any) => {
  const newtodo = {
    text: 'Сделать Кашку',
    id: 30,
    color: 'yellow',
    completed: true,
  }

  // console.log(todo, onAddTodo)
  const todoItems = todo.map((obj: ITodo) => {
    return <TodoItem onChangeColor={onChangeColor} key={obj.id} onDeleteTodo={onDeleteTodo} onCompletedClick={onCompletedClick} itodo={obj} />
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
    onCompletedClick: (id: number) => dispatch(CompletedClickAC(id)),
    onDeleteTodo: (id: number) => dispatch(DeleteTodoAC(id)),
    onChangeColor: (id: number, color: string) => dispatch(ChangeColorAC(id, color))
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Todo)