import React from 'react'
import { ITodo } from '../../types/types'
import './TodoItem.scss'



const TodoItem = ({ text, id, color, completed }: ITodo) => {

  const style = completed ? 'completed' : ''

  return (
    <div className="TodoItem">
      <div className="TodoItem__text-container">
        <div className="TodoItem__completed-box">
          { completed ? <i className="fa fa-check green" /> : null }
        </div>
        <span className={style}>
          { text }
        </span>
      </div>
      <div className="TodoItem__button-container">
        <div className="TodoItem__color-box">
          <i className={`fa fa-circle ${color}`} />
        </div>
        <div className="TodoItem__trash-box">
          <i className="fa fa-trash-o" />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
