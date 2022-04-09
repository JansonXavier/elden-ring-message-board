import React, { useEffect, useState, useContext } from 'react';
import { CategoryContext, ThreadContext, CurThreadContext, PathContext } from '../../context'
import Nav from "./Nav";
import Main from "./Main/Main";
import './Home.css';

const Home = () => {
  // use an array for category so that passing in the same value will still cause an update
  const [category, setCategory] = useState(['Enemies']);
  const [threads, setThreads] = useState([]);
  const [curThread, setCurThread] = useState('');
  const setPath = useContext(PathContext);

  useEffect(() => {
    fetch('/api/thread/' + category[0])
    .then(res => res.json())
    .then(data => {
      setThreads(data);
      setPath('home')
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
