import { connect } from 'react-redux'
import React, { useState } from 'react'
import { IState, ITodo } from '../../types/types'
import { ChangeColorAC, CompletedClickAC, DeleteTodoAC } from '../../redux/action/TodoAC'
import TodoItem from '../TodoItem/TodoItem'
import Portal from '../hoc/Portal/Portal'
import ModalTodo from '../ModalTodo/ModalTodo'
import Backdrop from '../UI/Backdrop/Backdrop'
import './Todo.scss'


const Todo = ({ todo, onCompletedClick, onDeleteTodo, onChangeColor }: any) => {

  const [showModal, setShowModal] = useState(false)

  const onShowHandler = () => {
    setShowModal(prev => !prev)
  }

  const todoItems = todo.map((obj: ITodo) => {
    return <TodoItem onChangeColor={onChangeColor} key={obj.id} onDeleteTodo={onDeleteTodo} onCompletedClick={onCompletedClick} itodo={obj} />
  })
  return (
    <div className="todo">
      <div className="block">
          { todoItems }
        <button onClick={onShowHandler} className="addTodo">
          <i className="fa fa-plus-square-o" />
          <span>Add todo</span>
        </button>
      </div>
      <Portal>
        { showModal ? <><ModalTodo onCloseModal={onShowHandler} /><Backdrop onToggle={onShowHandler} /></> : null}
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
