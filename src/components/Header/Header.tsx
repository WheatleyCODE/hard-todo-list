import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import ToggleMenu from '../UI/ToggleMenu/ToggleMenu'
import Backdrop from '../UI/Backdrop/Backdrop'
import UserDrawer from '../UI/UserDrawer/UserDrawer'
import './Header.scss'

const Header: React.FC = () => {

  const [ show, setShow ] = useState(false)
  const [ showUser, showUserShow ] = useState(false)

  const onClickHandler = () => {
    setShow(prev => !prev)
  }

  const onclickUserHandler = () => {
    showUserShow(prev => !prev)
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
      <Link to="/">
        <h1 className="title">UNLIMITED WEB WORKS!</h1>
      </Link>
      <div onClick={onclickUserHandler} className={showUser ? 'login-icon z-index' : 'login-icon'}>
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
        <ToggleMenu onToggle={onClickHandler} />
      </CSSTransition>

      {
        show ? <Backdrop onToggle={onClickHandler} /> : null
      }

      {
        showUser ?  <Backdrop onToggle={onclickUserHandler} /> : null
      }
      
      <CSSTransition
        in={showUser}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="usd"
      >
        <UserDrawer onToggle={onclickUserHandler} />
      </CSSTransition>
    </div>
  )
}

export default Header
