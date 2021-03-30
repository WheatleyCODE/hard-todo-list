import React from 'react'
import CloseButton from '../../ModalTodo/CloseButton/CloseButton'
import Button from '../Button/Button'
import './Alert.scss'

type AlertProps = {
  onCloseAlert: () => void
  callBack: () => void
  todoName: string
}

const Alert = ({ callBack, onCloseAlert, todoName }:AlertProps) => {
  return (
    <div className="container-center">
      <div className="Alert">
        <CloseButton onCloseClick={onCloseAlert} />
        <div className="Alert__header">
          <h3>Delete this todo?</h3>
        </div>
        <div className="Alert__sub-header"></div>

        <div className="Alert__main">
          <span className="Alert__todo-name">{todoName}</span>
        </div>
        <div className="Alert__footer">
          <Button onClickHandler={onCloseAlert} size={2} text="Cansel" />
          <Button onClickHandler={callBack} size={2} text="Delete" />
        </div>
      </div>
    </div>
  )
}

export default Alert
