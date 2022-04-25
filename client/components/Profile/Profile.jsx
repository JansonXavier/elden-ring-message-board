import React, { useContext } from "react";
import { PathContext, AuthContext } from '../../context'
import './Profile.scss'

const Profile = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const setPath = useContext(PathContext)

  const handleSignOut = () => {
    setAuth(null);
    setPath('/');
  }

  // console.log(auth)
  // console.log(auth.currentUser.get())
  // console.log(auth.currentUser.get().getBasicProfile().getName())

  return (
    <div id='profile-background'>
      <h2>{ auth ? auth.currentUser.get().getBasicProfile().getName() : 'Tarnished' }</h2>
      <button onClick={() => {
        setPath('/home')
      }}>Home</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Profile;