import React, { useContext } from 'react'
import { ExpContext } from '../ExpContext/ExpContext'

const TestComponent = () => {

  const context = useContext(ExpContext)

  console.log(context)

  return (
    <div>
      { context.show ? <h1>TestComponent</h1> : null }
      <button onClick={context.toggle}>Клацк!</button>
    </div>
  )
}

export default TestComponent
