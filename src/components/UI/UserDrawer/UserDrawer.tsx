import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './UserDrawer.scss'

type userDrawerProps = {
  onToggle: () => void
}

const UserDrawer = ({ onToggle }: userDrawerProps) => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({
      ...prev,
      email: e.target.value
    }))
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({
      ...prev,
      password: e.target.value
    }))
  }

  return (
    <div className="UserDrawer">
      <Input changeHadler={onChangeEmail} type={'text'} value={userData.email} placeholder={'Email'} />
      <Input changeHadler={onChangePassword} type={'password'} value={userData.password} placeholder={'Password'} />
      <br />
      <div className="container">
        <Button onClickHandler={onToggle} size={1} text={'Войти'} />
        <Button onClickHandler={onToggle} size={1} text={'Регистрация'} />
      </div>
    </div>
  )
}

export default UserDrawer
