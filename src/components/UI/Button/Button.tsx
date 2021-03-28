import React from 'react'
import './Button.scss'

type buttonProps = {
  text: string,
  size?: number,
  onClickHandler?: () => void,
}

const Button = ({ text, size, onClickHandler }: buttonProps) => {
  const styles = []

  if (size && size <= 3) {
    const sizeName = ['', 'low', 'medium', 'large']
    styles.push(sizeName[size])
  }
  return (
    <button onClick={onClickHandler} className={`${styles.join(' ')} button`}>{text} <i className="fa fa-angle-right" aria-hidden="true"></i></button>
  )
}

export default Button
