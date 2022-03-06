import React, { useContext } from "react";
import { PathContext } from '../../contexts/pathDetails'
import './Profile.scss'

const Profile = () => {
  const setPath = useContext(PathContext)

  const handleSignOut = () => {
    console.log(auth.signOut());
    setAuth(auth)
    setPath('/');
  }

  return (
    <div id='profile-background'>
      <h2>Tarnished</h2>
      <button onClick={() => {
        setPath('/home')
      }}>Home</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Profile;