import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Seatings from '../Seatings/Seatings'
import Todo from '../Todo/Todo'

function App() {
  return (
    <div className="Layout">
      <Header />
      <Switch>
        <Route path="/todo" component={Todo}/>
        {/* <Route path="/red" component={}/>
        <Route path='/yellow' component={}/>
        <Route path='/green' component={}/>
        <Route path='/grey' component={}/> */}
        <Route path='/seatings' component={Seatings}/>
        <Route path="/" exact component={Home}/>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
