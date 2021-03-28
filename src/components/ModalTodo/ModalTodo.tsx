import React from 'react'
import './ModalTodo.scss'

type ModalTodoProps = {
  onClickHandler: () => void
}

const ModalTodo = ({ onClickHandler }: ModalTodoProps) => {
  return (
    <div className="ModalTodo">
      <button onClick={onClickHandler} className="ModalTodo__close-button">
        <i className="fa fa-times" />
      </button>
      <div className="ModalTodo__header">
        <h1>Create your TODO</h1>
        <div className="ModalTodo__sub-header"></div>
      </div>
      <div className="ModalTodo__main">main</div>
      <div className="ModalTodo__footer">footer</div>
    </div>
  )
}

export default ModalTodo
