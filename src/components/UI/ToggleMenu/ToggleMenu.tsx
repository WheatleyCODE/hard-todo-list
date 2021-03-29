import React from 'react'
import { MenuItemGenerator, MenuItemList } from '../../../utils/utils'
import './ToggleMenu.scss'

type toggleMenuProps = {
  onToggle: () => void
}

const ToggleMenu = ({ onToggle }: toggleMenuProps) => {

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
