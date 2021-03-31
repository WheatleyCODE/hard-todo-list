import React from 'react'
import { useLogger, useInput } from '../../hooks/hooks'
import { ExpProvider } from './ExpContext/ExpContext'
import './Experiments.scss'
import ExpReduxThunk from './ExpReduxThunk/ExpReduxThunk'
import TestComponent from './TestComponent/TestComponent'

const Experiments = () => {
  // const dataBaseUrl = 'https://remember-5b76f-default-rtdb.firebaseio.com/'


  const inputOne = useInput('', 'Введите Email', 'email')
  const inputTwo = useInput('', 'Введите Password', 'password')
  // const inputThree = useInput('')
  // const inputFore = useInput('')
  useLogger(inputTwo.validError)

  return (
    <div className="Experiments">
      <h1 className="title">This is experiments page!</h1>
      <div className="exp-container">
        <h3 className="sub-title">Hook useInput</h3>
        <div className="exp-input-container">
          {/* Можно сделать компонент Input специально под хук */}
          {/* UseHooks.com */}
          { inputOne.validError ? <span>{inputOne.validError}</span> : null}
          <input {...inputOne.standart} className="exp-input"/>
          { inputTwo.validError ? <span>{inputTwo.validError}</span> : null}
          <input {...inputTwo.standart} className="exp-input"/>
        </div>
      </div>

      <div className="exp-container">
        <h3 className="sub-title">Context</h3>
        {/* Продвинутый вариант контекста */}
        <ExpProvider>
          <TestComponent />
        </ExpProvider>
      </div>

      <div className="exp-container">
        <h3 className="sub-title">{'Client <---> Server reduxThunk'}</h3>
        <ExpReduxThunk />
      </div>
    </div>
  ) 
}

export default Experiments