import React from 'react'
import './SelectColor.scss'

type SelectorColorProps = {
  onClickHandler: () => void
  onChangeColor: (id: number, color: string) => void
  id: number
}

//onClick={() => onChangeColor(20, 'red')}

const SelectColor = ({ onClickHandler, onChangeColor, id }: SelectorColorProps) => {
  const colorBox: string[] = [
    'red', 'yellow', 'green', 'grey'
  ]

  const onClickChanger = (color: string):void => {
    onClickHandler()
    onChangeColor(id, color)
  }

  const colorBoxJsx = colorBox.map((el) => (
    <div onClick={() => onClickChanger(el)} key={el} className="color-box">
      <i className={`fa fa-circle ${el}`}/>
    </div>
  ))

  return (
    <div className="SelectColor">
      {/* <div  className="color-box">
        <i className="fa fa-circle red"/>
      </div>
      <div onClick={onClickHandler} className="color-box">
        <i className="fa fa-circle yellow"/>
      </div>
      <div onClick={onClickHandler} className="color-box">
        <i className="fa fa-circle green"/>
      </div>
      <div onClick={onClickHandler} className="color-box">
      <i className="fa fa-circle grey"/>
      </div> */}
      { colorBoxJsx }
    </div>
  )
}

export default SelectColor
