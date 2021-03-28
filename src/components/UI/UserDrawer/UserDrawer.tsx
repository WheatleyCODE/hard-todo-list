import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'


import './UserDrawer.scss'

const userDrawer = () => {
  return (
    <div className="userDrawer">
      <Input />
      <Input />
      <br />
      <Button text={'Войти '} />
    </div>
  )
}

export default userDrawer
