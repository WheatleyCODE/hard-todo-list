import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Hello! Do you want try best TODO list?</h1>
      <Link to="/todo">
        <Button text={'Get started '} /> 
      </Link>
    </div>
  ) 
}

export default Home