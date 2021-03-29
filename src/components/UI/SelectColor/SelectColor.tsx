import React, { useRef } from 'react'
import { useClickOutside } from '../../../hooks/hooks'
import './SelectColor.scss'

type SelectorColorProps = {
  showSelector: () => void
  onChangeColor: (id: number, color: string) => void
  id: number
  onChangeTodoCreatorHandler?: (color:string) => void
}

const SelectColor = ({ showSelector, onChangeColor, id, onChangeTodoCreatorHandler }: SelectorColorProps) => {
  const colorBox: string[] = [
    'red', 'yellow', 'green', 'grey'
  ]

  const manageRef = useRef(null)
  useClickOutside(manageRef, showSelector)

  const onClickChanger = (color: string):void => {
    showSelector()
    onChangeColor(id, color)
    if (onChangeTodoCreatorHandler) {
      onChangeTodoCreatorHandler(color)
    }
  }

  const colorBoxJsx = colorBox.map((el) => (
    <div onClick={() => onClickChanger(el)} key={el} className="color-box">
      <i className={`fa fa-circle ${el}`}/>
    </div>
  ))

  return (
    <div ref={manageRef} className="SelectColor">
      { colorBoxJsx }
    </div>
  )
}

export default SelectColor
