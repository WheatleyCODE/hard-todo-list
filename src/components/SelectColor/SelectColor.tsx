import React from 'react'
import './SelectColor.scss'

type SelectorColorProps = {
  onClickHandler: () => void
  onChangeColor: (id: number, color: string) => void
  id: number
  onChangeTodoCreatorHandler?: (color:string) => void
}

//onClick={() => onChangeColor(20, 'red')}

const SelectColor = ({ onClickHandler, onChangeColor, id, onChangeTodoCreatorHandler }: SelectorColorProps) => {
  const colorBox: string[] = [
    'red', 'yellow', 'green', 'grey'
  ]

  const onClickChanger = (color: string):void => {
    onClickHandler()
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
    <div className="SelectColor">
      { colorBoxJsx }
    </div>
  )
}

export default SelectColor