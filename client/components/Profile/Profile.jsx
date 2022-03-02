import React, { useContext } from "react";
import { PathContext } from '../../pathDetails'
import './Profile.scss'

const Profile = () => {
  const setPath = useContext(PathContext)

  return (
    <div id='profile-background'>
      <h2>Profile</h2>
      <button onClick={() => {
        setPath('/home')
      }}>Home</button>
      <button onClick={() => {setPath('/')}}>Sign Out</button>
    </div>
  )
}

export default Profile;