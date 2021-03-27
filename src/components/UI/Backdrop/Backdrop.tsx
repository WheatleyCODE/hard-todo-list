import React from 'react'
import './Backdrop.scss'

type backdropProps = {
  onToggle: () => void
}

const Backdrop = ({ onToggle }:backdropProps) => {
  return (
    <div onClick={onToggle} className="backdrop">

    </div>
  )
}

export default Backdrop
