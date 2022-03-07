import React, { useContext } from "react";
import { PathContext } from '../../contexts/pathDetails'
import backgroundImage from './img2.jpeg'
import './Login.scss'

const Login = () => {
  const setPath = useContext(PathContext)

  return (
    <div className='background' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="login-block">
          <button id="tarnished-button" onClick={() => setPath('/home')}>Fingers ahead</button>
        </div>
    </div>
  )
}

export default Login;
