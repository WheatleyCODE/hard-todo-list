import React, { useState } from 'react'

export const ExpContext = React.createContext({ show: false, toggle: () => {}})

export const ExpProvider = ({ children }: any) => {

  //Место для написания логики для нашего компонента

  const [show, setShow] = useState(false)
  const toggle = () => setShow(prev => !prev)

  return (
    <ExpContext.Provider value={{ show, toggle }}>
      { children }
    </ExpContext.Provider>
  )
}

//////////////// Применение

// {/* <ExpProvider>
//   <App />
// </ExpProvider> */}