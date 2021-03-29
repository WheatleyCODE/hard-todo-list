import React, { useState } from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import SelectColor from '../SelectColor/SelectColor'
import { ITodoCreator } from '../../types/types'
import { AddToDoAC } from '../../redux/action/TodoAC'
import { connect } from 'react-redux'
import './ModalTodo.scss'

type ModalTodoProps = {
  onCloseModal: () => void
  onAddTodo?: (newTodo: ITodoCreator) => void
}

const ModalTodo = ({ onCloseModal, onAddTodo }: ModalTodoProps) => {

  const ItodoCr: ITodoCreator = {
    text: 'Выучить JS',
    id: 1337,
    color: 'red',
    completed: false,
    subTitle: 'Точно выучить!',
    textArea: 'Я очень хочу выучить JS потому что я хочу быть Frontend разработчиком и лутать горы бабла'
  }

  const [show, setShow] = useState(false)
  const [todo, setTodo] = useState(ItodoCr)

  const onToggleColors = () => {
    setShow(prev => !prev)
  }

  const inputTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(prev => ({
      ...prev,
        text: e.target.value,
    }))
  }

  const inputSubTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(prev => ({
      ...prev,
        subTitle: e.target.value,
    }))
  }

  const inputSTextAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(prev => ({
      ...prev,
        textArea: e.target.value,
    }))
  }

  const changeColor = (color:string) => {
    setTodo(prev => ({
      ...prev,
        color,
    }))
  }

  const onAddTodoButtonHandler = () => {
    if (onAddTodo)
      onAddTodo(todo)
      onCloseModal()
  }

  return (
    <div className="ModalTodo">
      <button onClick={onCloseModal} className="ModalTodo__close-button">
        <i className="fa fa-times" />
      </button>
      <div className="ModalTodo__header">
        <h1>Create your TODO</h1>
        <div className="ModalTodo__sub-header"></div>
      </div>
      <div className="ModalTodo__main">
        <div className="input-box">
          <Input changeHadler={inputTitleChangeHandler} value={todo.text} type={'text'} placeholder={'Title todo'} />
          <Input changeHadler={inputSubTitleChangeHandler} type={'text'} value={todo.subTitle} placeholder={'Sub title'} />
          <textarea onChange={inputSTextAreaChangeHandler} className="ModalTodo__textarea" value={todo.textArea} />
        </div>
      </div>
      <div className="ModalTodo__footer">
      <div onClick={onToggleColors} className="TodoItem__color-box">
      { show ? <SelectColor id={1000} onChangeColor={() => {}} onChangeTodoCreatorHandler={changeColor} onClickHandler={() => {}} /> : null}
          <i className={`fa fa-circle ${todo.color}`} />
        </div>
        <Button onClickHandler={onAddTodoButtonHandler} size={2} text={'Create Todo'} />
      </div>
    </div>
  )
}
function mapDispatchToProps(dispatch: any) {
  return {
    onAddTodo: (newTodo: ITodoCreator) => dispatch(AddToDoAC(newTodo)),

  }
}
export default connect(null, mapDispatchToProps)(ModalTodo)
