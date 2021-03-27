import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ToggleMenu from '../UI/ToggleMenu/ToggleMenu'
import Backdrop from '../UI/Backdrop/Backdrop'
import './Header.scss'

const Header: React.FC = () => {

  const [ show, setShow ] = useState(false)

  const onClickHandler = () => {
    setShow(prev => !prev)
  }

  const styles: string[] = [ 'bars' ]

  if (show) {
    styles.push('active')
  }

  return (
    <div className="header">
      <div className={styles.join(' ')}>
        <i onClick={onClickHandler} className="fa fa-bars" aria-hidden="true" />
      </div>
      <h1 className="title">UNLIMITED WEB WORKS!</h1>
      <div className="login-icon">
        <i className="fa fa-user-circle-o" aria-hidden="true"/>
      </div>
      <div className="header__sub-header">
        <p className="sub-title">Great to-do list</p>
      </div>
        <CSSTransition
        in={show}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames="os"
      >
        <ToggleMenu />
      </CSSTransition>
      {
        show ? <Backdrop onToggle={onClickHandler} /> : null
      }
    </div>
  )
}

export default Header
