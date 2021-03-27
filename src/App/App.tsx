import React from 'react'
import { connect } from 'react-redux'
import { AddNumberAC, SubAC, SumAC, AddAsyncAC } from '../redux/action/actions'
import './App.scss'

function App(props:any) {
  console.log(props)
  return (
    <div className="App">
      <h1>Hello TS and React!</h1>
      <h1>{props.counter}</h1>
      <button onClick={props.sum}>Sum</button>
      <button onClick={props.sub}>Sub</button>
      <button onClick={() => { props.addNum(100) }}>Add</button>
      <button onClick={() => { props.addAsync(200) }}>Добавить ассинхронно 200</button>
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    counter: state.keyOne.counter
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    sum: () => dispatch(SumAC()),
    sub: () => dispatch(SubAC()),
    addNum: (num: number) => dispatch(AddNumberAC(num)),
    addAsync: (num: number) => dispatch(AddAsyncAC(num)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
