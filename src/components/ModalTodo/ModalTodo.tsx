import React, { useState } from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import SelectColor from '../UI/SelectColor/SelectColor'
import { ITodoCreator } from '../../types/types'
import { AddToDoAC, ChangeTodoAC } from '../../redux/action/TodoAC'
import { connect } from 'react-redux'
import './ModalTodo.scss'
import CloseButton from './CloseButton/CloseButton'

type ModalTodoProps = {
  vieMod?: boolean
  chengeMod?: boolean
  IdodoCr?: ITodoCreator
  onCloseModal: () => void
  onAddTodo?: (newTodo: ITodoCreator) => void
  onChangeTodo: (newTodo: ITodoCreator) => void
}

const ModalTodo = ({ onCloseModal, onAddTodo, chengeMod, IdodoCr, onChangeTodo, vieMod}: ModalTodoProps) => {

  let ItodoCreation: ITodoCreator
  if (IdodoCr) {
    ItodoCreation = IdodoCr
  } else {
    ItodoCreation = {
      text: '',
      id: 1337,
      color: 'red',
      completed: false,
      subTitle: '',
      textArea: ''
    }
  }

  const [show, setShow] = useState(false)
  const [todo, setTodo] = useState(ItodoCreation)
  const [error, setError] = useState('title cannot be empty')

  const onToggleColors = () => {
    setShow(prev => !prev)
  }

  const inputTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(prev => ({
      ...prev,
        text: e.target.value,
    }))
    if (e.target.value.length < 3) {
      setError('title должен быть больше 3')
      if (!e.target.value) {
        setError('title cannot be empty')
      }
    } else {
      setError('')
    }
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

  const onChangeTodoAndClose = () => {
    onChangeTodo(todo)
    onCloseModal()
  }

  let button
  let title: string
  if (chengeMod) {
    button = <Button disabled={!!error} onClickHandler={onChangeTodoAndClose} size={2} text={'Change Todo'} />
    title = 'Change your TODO'
  } else if (vieMod) {
    button = null
    title = 'Vie your TODO'
  } else {
    button = <Button disabled={!!error} onClickHandler={onAddTodoButtonHandler} size={2} text={'Create Todo'} />
    title = 'Create your TODO'
  }


  return (
    <div className="ModalTodo">
      <CloseButton onCloseClick={onCloseModal} />
      <div className="ModalTodo__header">
        <h1>{title}</h1>
        <div className="ModalTodo__sub-header"></div>
      </div>
      <div className="ModalTodo__main">
        <div className="input-box">
          { vieMod ? <Input disabled={vieMod} changeHadler={inputTitleChangeHandler} value={todo.text} type={'text'} placeholder={'Title todo'} /> : <Input textError={error} isError={!!error} disabled={vieMod} changeHadler={inputTitleChangeHandler} value={todo.text} type={'text'} placeholder={'Title todo'} />}
          <Input disabled={vieMod} changeHadler={inputSubTitleChangeHandler} type={'text'} value={todo.subTitle} placeholder={'Sub title'} />
          <textarea disabled={vieMod} onChange={inputSTextAreaChangeHandler} className="ModalTodo__textarea" value={todo.textArea} />
        </div>
      </div>
      <div className="ModalTodo__footer">
      <div onClick={onToggleColors} className="TodoItem__color-box">
      { show ? <SelectColor id={1000} onChangeColor={() => {}} onChangeTodoCreatorHandler={changeColor} showSelector={() => {}} /> : null}
          <i className={`fa fa-circle ${todo.color}`} />
        </div>
      { button }
      </div>
    </div>
  )
}
function mapDispatchToProps(dispatch: any) {
  return {
    onAddTodo: (newTodo: ITodoCreator) => dispatch(AddToDoAC(newTodo)),
    onChangeTodo: (newTodo: ITodoCreator) => dispatch(ChangeTodoAC(newTodo))
  }
}
export default connect(null, mapDispatchToProps)(ModalTodo)
