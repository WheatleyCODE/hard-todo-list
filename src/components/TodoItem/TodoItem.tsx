import React, { useState } from 'react'
import { ITodo } from '../../types/types'
import SelectColor from '../UI/SelectColor/SelectColor'
import Alert from '../UI/Alert/Alert'
import Portal from '../hoc/Portal/Portal'
import './TodoItem.scss'
import Backdrop from '../UI/Backdrop/Backdrop'

type TodoItemProps = {
  itodo : ITodo,
  onCompletedClick: (id: number) => void
  onDeleteTodo: (id: number) => void
  onChangeColor: (id: number, color: string) => void
  onShowChangedModal: (id: number) => void
  onShowVieModal: (id: number) => void
}

const TodoItem = ({ itodo, onCompletedClick, onDeleteTodo, onChangeColor, onShowChangedModal, onShowVieModal }: TodoItemProps) => {

  const [show, setShow] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const style = itodo.completed ? 'completed' : ''

  const onShowSelector = () => {
    setShow(prev => !prev)
  }

  return (
    <div className="TodoItem">
      <div className="TodoItem__text-container">
        <div onClick={() => onCompletedClick(itodo.id)} className="TodoItem__completed-box">
          { itodo.completed ? <i className="fa fa-check green" /> : null }
        </div>
        <span onClick={() => onShowVieModal(itodo.id)} className={style}>
          { itodo.text }
        </span>
      </div>
      <div className="TodoItem__button-container">
        <div onClick={onShowSelector} className="TodoItem__color-box">
          <i className={`fa fa-circle ${itodo.color}`} />
        </div>
        { show ? <SelectColor id={itodo.id} onChangeColor={onChangeColor} showSelector={onShowSelector} /> : null}
        <div onClick={() => onShowChangedModal(itodo.id)} className="TodoItem__update-box">
          <i className="fa fa-pencil" />
        </div>
        <div onClick={() => setShowAlert(true)} className="TodoItem__trash-box">
          <i className="fa fa-trash-o" />
        </div>
        <Portal>
          { showAlert ? <><Alert todoName={itodo.text} callBack={() => onDeleteTodo(itodo.id)} onCloseAlert={() => setShowAlert(false)} />
            <Backdrop onToggle={() => setShowAlert(false)} /></> : null }
        </Portal>
      </div>
    </div>
  )
}

export default TodoItem
