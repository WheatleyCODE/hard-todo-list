import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './UserDrawer.scss'

type userDrawerProps = {
  onToggle: () => void
}

const UserDrawer = ({ onToggle }: userDrawerProps) => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    emailDirty: false,
    passwordDirty: false,
    emailError: 'Email cannot be empty',
    passwordError: 'Password cannot be empty',
    formValid: false,
  })

  useEffect(() => {

    if (formData.emailError || formData.passwordError) {
      setFormData(prev => ({
        ...prev,
        formValid: false,
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        formValid: true,
      }))
    }

  }, [formData.emailError, formData.passwordError])

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setFormData(prev => ({
          ...prev,
          emailDirty: true,
        }))
        break
      case 'password':
        setFormData(prev => ({
          ...prev,
          passwordDirty: true
        }))
        break
    }
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      email: e.target.value
    }))
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      console.log('Некорректный Email')
      setFormData(prev => ({
        ...prev,
        emailError: 'Некорректный Email'
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        emailError: ''
      }))
    }
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      password: e.target.value
    }))
    if (e.target.value.length < 5) {
      setFormData(prev => ({
        ...prev,
        passwordError: 'Пароль должен быть больше 5'
      }))
      if (!e.target.value) {
        setFormData(prev => ({
          ...prev,
          passwordError: 'Password cannot be empty'
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        passwordError: ''
      }))
    }
  }

  return (
    <div className="UserDrawer">
      <form>
        <Input
          onBlurHandler={blurHandler}
          isError={!!(formData.emailDirty && formData.emailError)}
          textError={formData.emailError}
          changeHadler={onChangeEmail}
          type={'text'}
          value={formData.email}
          name={'email'}
          placeholder={'Email'}
        />
        <Input 
          onBlurHandler={blurHandler}
          isError={!!(formData.passwordDirty && formData.passwordError)}
          textError={formData.passwordError}
          name={'password'}
          changeHadler={onChangePassword}
          type={'password'}
          value={formData.password}
          placeholder={'Password'}
        />
        <br />
        <div className="container">
          <Button disabled={!formData.formValid} onClickHandler={onToggle} size={1} text={'Войти'} />
          <Button disabled={!formData.formValid} onClickHandler={onToggle} size={1} text={'Регистрация'} />
        </div>
      </form>
    </div>
  )
}

export default UserDrawer
