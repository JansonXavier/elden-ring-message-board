import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleNav = (str) => {
    navigate('/' + str);
  }

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={() => {handleNav('home')}}>Home</button>
      <button onClick={() => {handleNav('')}}>Sign Out</button>
    </div>
  )
}

export default Profile;