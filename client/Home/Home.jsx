import React from "react";
import { useNavigate } from 'react-router-dom'
import Nav from "./Nav";
import Main from "./Main";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (str) => {
    navigate('/' + str);
  }

  return (
    <div className="home">
      <Nav />
      <Main />
      <button onClick={() => {handleClick('')}}>Sign Out</button>
    </div>
  )
}

export default Home;