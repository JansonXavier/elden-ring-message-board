import React, { useContext } from 'react';
import { CurThreadContext } from '../../../contexts/curThreadDetails';
import { PathContext } from '../../../contexts/pathDetails';
import { ThreadContext } from '../../../contexts/threadDetails';
import './ThreadItem.scss'

const ThreadItem = (props) => {
  const { topic, created_by, num_msgs, _id } = props.thread;
  const setPath = useContext(PathContext);
  const setThreads = useContext(ThreadContext)[1];
  const setCurThread = useContext(CurThreadContext)[1];

  const handleClick = () => {
    fetch('/api/thread/' + _id, {method:'DELETE'})
      .then(res => res.json)
      .then(data => setThreads((threads) => threads.filter((thread) => thread._id !== _id )))
      .catch(err => console.log(err));
  }

  return (
    <>
    <div className='thread-item' style={{backgroundColor: props.colour % 2 ? '#888' : '#999'}}>
      <p className='thread-topic' onClick={() => {setPath('/home/messages'); setCurThread(_id)}}>{topic}</p>
      <p className='thread-author'>{created_by}</p>
      <p className='thread-num-msgs'>{num_msgs}</p>
      <button className='delete' onClick={handleClick}>Delete</button>
    </div>
    </>
  )
}

export default ThreadItem;
