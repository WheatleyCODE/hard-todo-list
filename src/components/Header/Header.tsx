import React from 'react'
import './Header.scss'

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="title">UNLIMITED WEB WORKS!</h1>
      <div className="header__sub-header">
        <p className="sub-title">Great to-do list</p>
      </div>
    </div>
  )
}

export default Header
