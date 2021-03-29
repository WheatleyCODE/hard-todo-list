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
    path: '/red',
    icon: 'fa fa-circle red',
    text: 'Red'
  },
  {
    path: '/yellow',
    icon: 'fa fa-circle yellow',
    text: 'Yellow'
  },
  {
    path: '/green',
    icon: 'fa fa-circle green',
    text: 'Green'
  },
  {
    path: '/grey',
    icon: 'fa fa-circle grey',
    text: 'Grey'
  },
  {
    path: '/seatings',
    icon: 'fa fa-sliders',
    text: 'Seatings'
  },
]