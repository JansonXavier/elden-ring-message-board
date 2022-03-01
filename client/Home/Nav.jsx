import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleNav = (str) => {
    navigate('/' + str);
  }

  return (
    <nav>
      <button onClick={() => handleNav('profile')}>Profile</button>
      <p>Mobs</p>
      <p>Builds</p>
      <p>Lore</p>
      <p>Groups</p>
    </nav>
  )
}

export default Nav;
