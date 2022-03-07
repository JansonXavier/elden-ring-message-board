import React, { useEffect, useState } from 'react';
import { CategoryContext } from '../../contexts/categoryDetails';
import { ThreadContext } from '../../contexts/threadDetails';
import { CurThreadContext } from '../../contexts/curThreadDetails'
import Nav from "./Nav";
import Main from "./Main/Main";
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState('Enemies');
  const [threads, setThreads] = useState([]);
  const [curThread, setCurThread] = useState('');

  useEffect(() => {
    fetch('/api/category/' + category)
    .then(res => res.json())
    .then(data => {
      setThreads(data);
    })
    .catch(err => console.log(err));
  }, [category])

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <ThreadContext.Provider value={[threads, setThreads]}>
        <CurThreadContext.Provider value={[curThread, setCurThread]}>
          <div className="home">
          <Nav />
          <Main />
        </div>
        </CurThreadContext.Provider>
      </ThreadContext.Provider>
    </CategoryContext.Provider>
  )
}

export default Home;
