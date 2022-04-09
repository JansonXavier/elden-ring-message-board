import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurThreadContext, PathContext, ThreadContext } from '../../../context'
import './ThreadItem.scss'

const ThreadItem = (props) => {
  const { topic, created_by, num_msgs, _id } = props.thread;
  const setPath = useContext(PathContext);
  const setThreads = useContext(ThreadContext)[1];
  const navigate = useNavigate();
  const setCurThread = useContext(CurThreadContext)[1];

  const deleteThread = () => {
    fetch('/api/thread/' + _id, {method:'DELETE'})
      .then(() => {
        setThreads((threads) => threads.filter((thread) => thread._id !== _id ));
        navigate('/home');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <div className='thread-item' style={{backgroundColor: props.colour % 2 ? '#888' : '#999'}}>
      <p className='thread-topic' onClick={() => {setPath('/home/messages'); setCurThread(props.thread)}}>{topic}</p>
      <p className='thread-author'>{created_by}</p>
      <p className='thread-num-msgs'>{num_msgs}</p>
      <button className='delete' onClick={deleteThread}>Delete</button>
    </div>
    </>
  )
}

export default ThreadItem;
