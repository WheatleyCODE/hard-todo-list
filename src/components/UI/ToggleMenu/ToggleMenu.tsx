import React from 'react'
import { Link } from 'react-router-dom'
import './ToggleMenu.scss'

type toggleMenuProps = {
  onToggle: () => void
}

const ToggleMenu = ({ onToggle }: toggleMenuProps) => {
  return (
    <div className="toggle-menu">
      <nav className="menu">
        <ul>
          <Link onClick={onToggle} to="/">
            <li className="item">
              <i className="fa fa-home" aria-hidden="true" />
              <span>
                Home
              </span>
            </li>
          </Link>
          <Link onClick={onToggle} to="/todo">
            <li className="item">
              <i className="fa fa-check-square-o" aria-hidden="true" />
              <span>
                Todo
              </span>
            </li>
          </Link>
          <Link onClick={onToggle} to="/red">
            <li className="item">
              <i className="fa fa-circle red" aria-hidden="true" />
              <span>
                Red
              </span>
            </li>
          </Link>
          <Link onClick={onToggle} to="/yellow">
            <li className="item">
              <i className="fa fa-circle yellow" aria-hidden="true" />
              <span>
                Yellow
              </span>
            </li>
          </Link>
          <Link onClick={onToggle} to="/green">
            <li className="item">
              <i className="fa fa-circle green" aria-hidden="true" />
              <span>
                Green
              </span>
            </li>
          </Link>
          <Link onClick={onToggle} to="/grey">
            <li className="item">
              <i className="fa fa-circle grey" aria-hidden="true" />
              <span>
                Grey
              </span>
            </li>
          </Link>
          <Link onClick={onToggle} to="/seatings">
            <li className="item">
              <i className="fa fa-sliders" aria-hidden="true" />
              <span>
                Seatings
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default ToggleMenu
