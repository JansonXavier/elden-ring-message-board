import React, { useContext } from 'react';
import { CurThreadContext } from '../../../contexts/curThreadDetails';
import { PathContext } from '../../../contexts/pathDetails';
import './ThreadItem.scss'

const ThreadItem = (props) => {
  const { topic, created_by, num_msgs, _id } = props.thread;
  const setPath = useContext(PathContext);
  const setCurThread = useContext(CurThreadContext)[1];

  return (
    <div 
      className='threadItem'
      style={{backgroundColor: props.colour % 2 ? '#888' : '#999'}}
      onClick={() => {
        setPath('/home/messages')
        setCurThread(_id)
      }}
    >
      <p>{topic}</p>
      <p>{created_by}</p>
      <p>{num_msgs}</p>
      <button className='delete'>Delete</button>
    </div>
  )
}

export default ThreadItem;
