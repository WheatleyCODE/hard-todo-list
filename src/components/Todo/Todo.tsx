import { connect } from 'react-redux'
import React, { useState } from 'react'
import { IState, ITodoCreator } from '../../types/types'
import { ChangeColorAC, CompletedClickAC, DeleteTodoAC } from '../../redux/action/TodoAC'
import TodoItem from '../TodoItem/TodoItem'
import Portal from '../hoc/Portal/Portal'
import ModalTodo from '../ModalTodo/ModalTodo'
import Backdrop from '../UI/Backdrop/Backdrop'
import './Todo.scss'

type TodoProps = {
  todo: any,
  onCompletedClick: (id: number) => void,
  onDeleteTodo: (id: number) => void,
  onChangeColor: (id: number, color: string) => void,
}


const Todo = ({ todo, onCompletedClick, onDeleteTodo, onChangeColor }: TodoProps) => {

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showVieModal, setShowVieModal] = useState(false)
  const [showChangedModal, setShowChangedModal] = useState(false)
  const [modal, setModal] = useState(<div />)


  const onShowCreateModal = () => {
    setShowCreateModal(prev => !prev)
  }

  const onShowChangedModal = (id: number) => {
    const index = todo.findIndex((el:ITodoCreator) => el.id === id)
    setModal(<ModalTodo chengeMod={true} IdodoCr={todo[index]} onCloseModal={closeChangedModal} />)
    setShowChangedModal(prev => !prev)
  }
  const closeChangedModal = () => {
    setShowChangedModal(prev => !prev)
  }

  const onShowVieModal = (id: number) => {
    const index = todo.findIndex((el:ITodoCreator) => el.id === id)
    setModal(<ModalTodo vieMod={true} IdodoCr={todo[index]} onCloseModal={closeVieModal} />)
    setShowVieModal(prev => !prev)
  }
  const closeVieModal = () => {
    setShowVieModal(prev => !prev)
  }

  const todoItems = todo.map((obj:ITodoCreator) => {
    return <TodoItem
      onShowVieModal={onShowVieModal}
      onChangeColor={onChangeColor}
      key={obj.id} onDeleteTodo={onDeleteTodo}
      onCompletedClick={onCompletedClick}
      itodo={obj}
      onShowChangedModal={onShowChangedModal}
    />
  })
  return (
    <div className="todo">
      <div className="block">
          { todoItems }
        <button onClick={onShowCreateModal} className="addTodo">
          <i className="fa fa-plus-square-o" />
          <span>Add todo</span>
        </button>
      </div>
      <Portal>
        { showCreateModal ? <><ModalTodo onCloseModal={onShowCreateModal} /><Backdrop onToggle={onShowCreateModal} /></> : null }
        { showVieModal ?  <>{ modal }<Backdrop onToggle={closeVieModal} /></> : null }
        { showChangedModal ?  <>{ modal }<Backdrop onToggle={closeChangedModal} /></> : null }
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
