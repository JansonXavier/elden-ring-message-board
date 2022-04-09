import React, { useContext } from "react";
import { CategoryContext, PathContext } from "../../context"
import './Nav.scss'

const Nav = () => {
  const setPath = useContext(PathContext);
  const setCategory = useContext(CategoryContext)[1];

  const handleClick = (category) => {
    setCategory([category])
  }

  return (
    <nav>
      <div className="categories">
      <button onClick={() => handleClick('Enemies')}>Enemies</button>
      <button onClick={() => handleClick('Builds')}>Builds</button>
      <button onClick={() => handleClick('Lore')}>Lore</button>
      <button onClick={() => handleClick('Groups')}>Groups</button>
      </div>
      <button id='profile' onClick={() => setPath('/profile')}>Profile</button>
    </nav>
  )
}

export default Nav;
