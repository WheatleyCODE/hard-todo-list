import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItemElement } from '../types/types'

export const MenuItemGenerator = (elem: MenuItemElement[], onToggle: () => void) => {
  const menuItems = elem.map((obj) => {
    return (
      <Link onClick={onToggle} key={obj.text} to={obj.path}>
        <li className="item">
          <i className={obj.icon} aria-hidden="true" />
            <span>
              {obj.text}
            </span>
        </li>
      </Link>
    )
  })

  return menuItems
}

export const MenuItemList: MenuItemElement[] = [
  {
    path: '/',
    icon: 'fa fa-home',
    text: 'Home'
  },
  {
    path: '/todo',
    icon: 'fa fa-check-square-o',
    text: 'Todo'
  },
  {
    path: '/seatings',
    icon: 'fa fa-sliders',
    text: 'Seatings'
  },
]