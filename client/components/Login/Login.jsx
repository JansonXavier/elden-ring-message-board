import React, { useContext } from "react";
import { PathContext } from '../../contexts/pathDetails'
import GoogleAuth from "./GoogleAuth";
import backgroundImage from './img2.jpeg'
import './Login.scss'

const Login = () => {
  const setPath = useContext(PathContext)

  return (
    <div className='background' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="login-block">
          <GoogleAuth />
          <button id="tarnished-button" onClick={() => setPath('/home')}>Continue as Tarnished</button>
        </div>
    </div>
  )
}

export default Login;
