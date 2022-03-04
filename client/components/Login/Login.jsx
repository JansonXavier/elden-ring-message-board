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
          <button id="login" onClick={() => setPath('/home')}>Login</button>
          {/* <GoogleAuth /> */}
        </div>
    </div>
  )
}

export default Login;
