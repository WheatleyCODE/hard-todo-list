
import React from 'react'
import './Input.scss'

type InputProps = {
  value: string | number,
  placeholder: string,
  type: string,
}

const Input = ({type, value, placeholder }:InputProps) => {
  return (
    <input value={value} placeholder={placeholder} className="input" type={type} />
  )
}

export default Input
