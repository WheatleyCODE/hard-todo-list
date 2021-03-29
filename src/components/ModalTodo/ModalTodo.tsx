import React, { useState } from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import './ModalTodo.scss'
import SelectColor from '../SelectColor/SelectColor'
import { ITodoCreator } from '../../types/types'
import { AddToDoAC } from '../../redux/action/TodoAC'
import { connect } from 'react-redux'

type ModalTodoProps = {
  onClickHandler: () => void
  onAddTodo?: (newtodo: ITodoCreator) => void
}

const ModalTodo = ({ onClickHandler, onAddTodo }: ModalTodoProps) => {

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

  const onClickChager = () => {
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

  const onButtonClickHandler = () => {
    if (onAddTodo)
      onAddTodo(todo)
    onClickHandler()
  }

  return (
    <div className="ModalTodo">
      <button onClick={onClickHandler} className="ModalTodo__close-button">
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
      <div onClick={onClickChager} className="TodoItem__color-box">
      { show ? <SelectColor id={1000} onChangeColor={() => {}} onChangeTodoCreatorHandler={changeColor} onClickHandler={() => {}} /> : null}
          <i className={`fa fa-circle ${todo.color}`} />
        </div>
        <Button onClickHandler={onButtonClickHandler} size={2} text={'Create Todo'} />
      </div>
    </div>
  )
}
function mapDispatchToProps(dispatch: any) {
  return {
    onAddTodo: (newtodo: ITodoCreator) => dispatch(AddToDoAC(newtodo)),

  }
}
export default connect(null, mapDispatchToProps)(ModalTodo)
