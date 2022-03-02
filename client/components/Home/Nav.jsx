import React, { useContext } from "react";
import { CategoryContext } from "../../categoryDetails";
import { PathContext } from '../../pathDetails'
import './Nav.scss'

const Nav = () => {
  const setPath = useContext(PathContext);
  const setCategory = useContext(CategoryContext)[1];

  return (
    <nav>
      <div className="categories">
      <button onClick={() => setCategory('Mobs')}>Mobs</button>
      <button onClick={() => setCategory('Builds')}>Builds</button>
      <button onClick={() => setCategory('Lore')}>Lore</button>
      <button onClick={() => setCategory('Groups')}>Groups</button>
      </div>
      <button id='profile' onClick={() => setPath('/profile')}>Profile</button>
    </nav>
  )
}

export default Nav;
