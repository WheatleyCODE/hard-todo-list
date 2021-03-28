import React from 'react'
import { ITodo } from '../../types/types'
import './TodoItem.scss'

type TodoItemProps = {
  itodo : ITodo,
  onCompletedClick: (id: number) => void
  onDeleteTodo: (id: number) => void
}

const TodoItem = ({ itodo, onCompletedClick, onDeleteTodo }: TodoItemProps) => {

  const style = itodo.completed ? 'completed' : ''

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
        <div className="TodoItem__color-box">
          <i className={`fa fa-circle ${itodo.color}`} />
        </div>
        <div onClick={() => onDeleteTodo(itodo.id)} className="TodoItem__trash-box">
          <i className="fa fa-trash-o" />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
