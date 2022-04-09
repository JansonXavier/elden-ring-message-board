import React, { useContext } from "react";
import { CategoryContext, PathContext } from "../../context"
import './Nav.scss'

const Nav = () => {
  const setPath = useContext(PathContext);
  const [category, setCategory] = useContext(CategoryContext);

  const handleClick = (selectedCategory) => {
    if (category === selectedCategory) return;
    setCategory([selectedCategory])
  }

  const setClassName = name => {
    return category[0] === name ? 'curCategory' : '';
  }

  const categories = (
    <div className="categories">
      <button className={setClassName('Enemies')} onClick={() => handleClick('Enemies')}>Enemies</button>
      <button className={setClassName('Builds')} onClick={() => handleClick('Builds')}>Builds</button>
      <button className={setClassName('Lore')} onClick={() => handleClick('Lore')}>Lore</button>
      <button className={setClassName('Groups')} onClick={() => handleClick('Groups')}>Groups</button>
    </div>
  )

  return (
    <nav>
      {categories}
      <button id='profile' onClick={() => setPath('/profile')}>Profile</button>
    </nav>
  )
}

export default Nav;
