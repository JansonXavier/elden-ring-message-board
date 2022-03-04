import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthDetails";
import { PathContext } from '../../contexts/pathDetails'
import './Profile.scss'

const Profile = () => {
  const [auth, setAuth] = useContext(AuthContext)
  const setPath = useContext(PathContext)

  const handleSignOut = () => {
    console.log(auth.signOut());
    setAuth(auth)
    setPath('/');
  }

  const name = auth.currentUser?.get().getBasicProfile()?.getName() || 'tarnished'

  return (
    <div id='profile-background'>
      <h2>{name}</h2>
      <button onClick={() => {
        setPath('/home')
      }}>Home</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Profile;