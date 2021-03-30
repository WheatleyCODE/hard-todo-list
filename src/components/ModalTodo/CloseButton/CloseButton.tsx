import React from 'react'
import './CloseButton.scss'

type CloseButtonProps = {
  onCloseClick: () => void
}

const CloseButton = ({ onCloseClick }: CloseButtonProps) => (
  <button onClick={onCloseClick} className="Close-button">
    <i className="fa fa-times" />
  </button> 
)

export default CloseButton
