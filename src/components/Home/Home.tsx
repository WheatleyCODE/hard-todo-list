import React from 'react'
import Button from '../UI/Button/Button'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Hello! Do you want try best TODO list?</h1>
      <Button text={'Get started '} /> 
    </div>
  ) 
}

export default Home