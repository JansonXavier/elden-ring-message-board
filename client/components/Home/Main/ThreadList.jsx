import React, { useContext } from "react";
import { PathContext } from "../../../pathDetails";
import ThreadItem from "./ThreadItem";
import './ThreadList.scss'

const ThreadList = () => {
  const setPath = useContext(PathContext)

  const createThread = () => {
    const inputValue = document.getElementById('new-thread-name').value;

    inputValue === ''
      ? console.log('Topic name required')
      : console.log('topic: ' + document.getElementById('new-thread-name').value)
  }

  // display
  return (
    <div>
      <div id='create-search'>
        <button id="create-thread" onClick={() => {createThread()}}>Create</button>
        <input type="text" id="new-thread-name" placeholder="Topic" />
      </div>
      <hr/>
      <div id="thread-header">
        <p>topic</p>
        <p>created by</p>
        <p>msgs</p>
        <p>last post</p>
      </div>
      <ThreadItem />
      <button onClick={() => {setPath('/home/messages')}}>ThreadList</button>
    </div>
  )
}

export default ThreadList;
