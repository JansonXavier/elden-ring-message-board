import React from "react";
import { useNavigate } from 'react-router-dom'
import backgroundImage from './img2.jpeg'
import './Login.scss'

const Login = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/home');
  }

  return (
    <div className='background' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="login-block">
          <button onClick={(e) => handleClick(e)}>Login</button>
        </div>
    </div>
  )
}

export default Login;