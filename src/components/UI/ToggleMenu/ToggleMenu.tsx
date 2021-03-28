import React from 'react'
import { MenuItemGenerator } from '../../../utils/utils'
import { MenuItemElement } from '../../../types/types'
import './ToggleMenu.scss'

type toggleMenuProps = {
  onToggle: () => void
}

const ToggleMenu = ({ onToggle }: toggleMenuProps) => {

  const MenuItemList: MenuItemElement[] = [
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

  return (
    <div className="toggle-menu">
      <nav className="menu">
        <ul>
          { MenuItemGenerator(MenuItemList, onToggle) }
        </ul>
      </nav>
    </div>
  )
}

export default ToggleMenu
