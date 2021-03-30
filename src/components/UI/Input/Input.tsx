
import React from 'react'
import './Input.scss'

type InputProps = {
  value?: string | number,
  placeholder: string,
  type: string,
  changeHadler?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean,
  isError?: boolean,
  textError?: string,
  name?: string
  onBlurHandler?: (e: any) => void
}

const Input = ({type, value, placeholder, changeHadler, disabled, isError, name, onBlurHandler, textError }:InputProps) => {
  return (
    <div className="input-container">
      { isError ? <span className="error-text">{textError}</span> : null}
      <input onBlur={onBlurHandler} name={name} disabled={disabled} onChange={changeHadler} value={value} placeholder={placeholder} className="input" type={type} />
    </div>
  )
}

export default Input
