import React from 'react'
import './ToggleMenu.scss'

const ToggleMenu: React.FC = () => {
  return (
    <div className="toggle-menu">
      <nav className="menu">
        <ul>
          <li className="item">
            <i className="fa fa-home" aria-hidden="true" />
            <span>
              Home
            </span>
          </li>
          <li className="item">
            <i className="fa fa-check-square-o" aria-hidden="true" />
            <span>
              Todo
            </span>
          </li>
          <li className="item">
            <i className="fa fa-circle red" aria-hidden="true" />
            <span>
              Red
            </span>
          </li>
          <li className="item">
            <i className="fa fa-circle yellow" aria-hidden="true" />
            <span>
              Yellow
            </span>
          </li>
          <li className="item">
            <i className="fa fa-circle green" aria-hidden="true" />
            <span>
              Green
            </span>
          </li>
          <li className="item">
            <i className="fa fa-circle grey" aria-hidden="true" />
            <span>
              Grey
            </span>
          </li>
          <li className="item">
            <i className="fa fa-sliders" aria-hidden="true" />
            <span>
              Seatings
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ToggleMenu
