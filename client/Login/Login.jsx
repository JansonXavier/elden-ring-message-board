import React from "react";
import { useNavigate } from 'react-router-dom'
import backgroundImage from './img2.jpeg'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate();

  const handleClick = (str) => {
    navigate('/' + str);
  }

  return (
    <div className='background' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="login-block">
          <button onClick={() => handleClick('home')}>Login</button>
        </div>
    </div>
  )
}

export default Login;