import React from 'react'
import './Button.scss'

type buttonProps = {
  text: string
}

const Button = ({ text }: buttonProps) => {
  return (
    <button className="button">{text}<i className="fa fa-angle-right" aria-hidden="true"></i></button>
  )
}

export default Button
