import React, { useContext } from "react";
import { CategoryContext } from "../../contexts/categoryDetails";
import { PathContext } from '../../contexts/pathDetails'
import './Nav.scss'

const Nav = () => {
  const setPath = useContext(PathContext);
  const setCategory = useContext(CategoryContext)[1];

  const handleClick = (category) => {
    setCategory(category)
    setPath('Home')
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
