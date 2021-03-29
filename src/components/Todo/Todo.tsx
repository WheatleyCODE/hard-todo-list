import { connect } from 'react-redux'
import React, { useState } from 'react'
import './Todo.scss'
import { IState, ITodo } from '../../types/types'
import TodoItem from '../TodoItem/TodoItem'
import Portal from '../hoc/Portal/Portal'
import ModalTodo from '../ModalTodo/ModalTodo'
import { ChangeColorAC, CompletedClickAC, DeleteTodoAC } from '../../redux/action/TodoAC'
import Backdrop from '../UI/Backdrop/Backdrop'

const Todo = ({ todo, onAddTodo, onCompletedClick, onDeleteTodo, onChangeColor }: any) => {

  const [showModal, setShowModal] = useState(false)

  const onClickHadler = () => {
    setShowModal(prev => !prev)
    // onAddTodo(newtodo)
  }

  const newtodo = {
    text: 'Сделать Кашку',
    id: 30,
    color: 'yellow',
    completed: true,
  }

  const todoItems = todo.map((obj: ITodo) => {
    return <TodoItem onChangeColor={onChangeColor} key={obj.id} onDeleteTodo={onDeleteTodo} onCompletedClick={onCompletedClick} itodo={obj} />
  })
  return (
    <div className="todo">
      <div className="block">
          { todoItems }
        <button onClick={onClickHadler} className="addTodo">
          <i className="fa fa-plus-square-o" />
          <span>Add todo</span>
        </button>
      </div>
      <Portal>
        { showModal ? <><ModalTodo onCloseModal={onClickHadler} /><Backdrop onToggle={onClickHadler} /></> : null}
      </Portal>
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
    onCompletedClick: (id: number) => dispatch(CompletedClickAC(id)),
    onDeleteTodo: (id: number) => dispatch(DeleteTodoAC(id)),
    onChangeColor: (id: number, color: string) => dispatch(ChangeColorAC(id, color))
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Todo)