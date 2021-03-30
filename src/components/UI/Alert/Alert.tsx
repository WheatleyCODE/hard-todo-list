import React from 'react'
import CloseButton from '../../ModalTodo/CloseButton/CloseButton'
import Button from '../Button/Button'
import './Alert.scss'

type AlertProps = {
  onCloseAlert: () => void
  callBack: () => void
}

const Alert = ({ callBack, onCloseAlert }:AlertProps) => {
  return (
    <div className="container-center">
      <div className="Alert">
        <CloseButton onCloseClick={onCloseAlert} />
        <div className="Alert__header">
          <h3>Точно удалить этот todo?</h3>
        </div>
        <div className="Alert__sub-header"></div>

        <div className="Alert__main">
        </div>
        <div className="Alert__footer">
          <Button onClickHandler={onCloseAlert} size={2} text="Отмена" />
          <Button onClickHandler={callBack} size={2} text="Удалить" />
        </div>
      </div>
    </div>
  )
}

export default Alert
