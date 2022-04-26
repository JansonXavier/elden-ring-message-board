import React, { useContext } from "react";
import { PathContext } from '../../context'
import backgroundImage from './img2.jpeg'
import GoogleAuth from "./GoogleAuth"
import './Login.scss'

const Login = () => {
  const setPath = useContext(PathContext)

  return (
    <div className='background' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="login-block">
          <button id="tarnished-button" onClick={() => setPath('/home')}>Continue as Tarnished</button>
          <GoogleAuth />
        </div>
    </div>
  )
}

export default Login;
