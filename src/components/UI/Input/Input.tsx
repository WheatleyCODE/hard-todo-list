
import React from 'react'
import './Input.scss'

type InputProps = {
  value?: string | number,
  placeholder: string,
  type: string,
  changeHadler?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const Input = ({type, value, placeholder, changeHadler, disabled }:InputProps) => {
  return (
    <input disabled={disabled} onChange={changeHadler} value={value} placeholder={placeholder} className="input" type={type} />
  )
}

export default Input
