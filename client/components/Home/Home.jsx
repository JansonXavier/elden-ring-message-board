import React, { useEffect, useState } from 'react';
import { CategoryContext } from '../../categoryDetails';
import Nav from "./Nav";
import Main from "./Main/Main";
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState('Mobs');
  const categoryState = [category, setCategory];

  useEffect(() => {
    const address = '/api/' + category
    console.log(address)
    fetch(address)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }, [category])

  return (
    <CategoryContext.Provider value={categoryState}>
      <div className="home">
        <Nav />
        <Main />
      </div>
    </CategoryContext.Provider>
  )
}

export default Home;