import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './UserDrawer.scss'

type userDrawerProps = {
  onToggle: () => void
}

const UserDrawer = ({ onToggle }: userDrawerProps) => {

  return (
    <div className="UserDrawer">
      <Input type={'text'} value={''} placeholder={'Email'} />
      <Input type={'password'} value={''} placeholder={'Password'} />
      <br />
      <div className="container">
        <Button onClickHandler={onToggle} size={1} text={'Войти'} />
        <Button onClickHandler={onToggle} size={1} text={'Регистрация'} />
      </div>
    </div>
  )
}

export default UserDrawer
