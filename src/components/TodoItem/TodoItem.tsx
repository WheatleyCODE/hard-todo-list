import React, { useState } from 'react'
import { ITodo } from '../../types/types'
import SelectColor from '../SelectColor/SelectColor'
import './TodoItem.scss'

type TodoItemProps = {
  itodo : ITodo,
  onCompletedClick: (id: number) => void
  onDeleteTodo: (id: number) => void
  onChangeColor: (id: number, color: string) => void
  onShowChangedModal: (id: number) => void
}

const TodoItem = ({ itodo, onCompletedClick, onDeleteTodo, onChangeColor, onShowChangedModal }: TodoItemProps) => {

  const style = itodo.completed ? 'completed' : ''

  const [show, setShow] = useState(false)

  const onShowSelector = () => {
    setShow(prev => !prev)
  }

  return (
    <div className="TodoItem">
      <div className="TodoItem__text-container">
        <div onClick={() => onCompletedClick(itodo.id)} className="TodoItem__completed-box">
          { itodo.completed ? <i className="fa fa-check green" /> : null }
        </div>
        <span className={style}>
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
        <div onClick={() => onDeleteTodo(itodo.id)} className="TodoItem__trash-box">
          <i className="fa fa-trash-o" />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
