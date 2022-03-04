import React, { useContext } from 'react';
import { CurThreadContext } from '../../../contexts/curThreadDetails';
import { PathContext } from '../../../contexts/pathDetails';
import './ThreadItem.scss'

const ThreadItem = (props) => {
  const { topic, created_by, num_msgs, _id } = props.thread;
  const setPath = useContext(PathContext);
  const setCurThread = useContext(CurThreadContext)[1];

  return (
    <>
    <div className='thread-item' style={{backgroundColor: props.colour % 2 ? '#888' : '#999'}}>
      <p className='thread-topic' onClick={() => {setPath('/home/messages'); setCurThread(_id)}}>{topic}</p>
      <p className='thread-author'>{created_by}</p>
      <p className='thread-num-msgs'>{num_msgs}</p>
      <button className='delete'>Delete</button>
    </div>
    </>
  )
}

export default ThreadItem;
