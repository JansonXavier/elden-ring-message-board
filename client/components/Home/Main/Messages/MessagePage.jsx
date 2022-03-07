import React, { useState, useContext, useEffect } from "react";
import { CurThreadContext } from "../../../../contexts/curThreadDetails";
import ThreadItem from "../ThreadItem";
import MessageBox from './MessageBox';
import InputField from "./InputField";
import './MessagePage.css'
import { ThreadContext } from "../../../../contexts/threadDetails";

const Messages = () => {
  const threads = useContext(ThreadContext)[0];
  const [mainThread, setMainThread] = useState(null);
  const { _id } = useContext(CurThreadContext)[0]
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // get current thread
    setMainThread(<ThreadItem key={`threadItem${0}`} colour={0} thread={threads.filter((thread) => thread._id === _id)[0]} />)

    // get all messages for current thread
    getMessages()
  }, [])

  // Set scroll position to bottom
  useEffect(() => {
    const messageBox = document.querySelector('.message-box');
    messageBox.scrollTop = messageBox.scrollHeight;
  }, [messages])

  const getMessages = () => {
    fetch('/api/message/' + _id)
      .then(res => res.json())
      .then(data => {
        setMessages(data)
      })
      .catch(err => console.log(err));
  }

  // post message from text field
  const handleClick = () => {
    const { value } = document.getElementById('message-input')
    document.getElementById('message-input').value = '';

    if (value === '') {
      console.log('Message is required');
      return;
    }

    const date = new Date()

    const body = {
      message: value,
      author: 'tarnished',
      date: date.toLocaleDateString(),
      thread: _id
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    }

    fetch('/api/message', options)
      .then(res => res.json())
      .then(data => setMessages([...messages, data]))
      .then(() => setMainThread(<ThreadItem key={`threadItem${0}`} colour={0} thread={threads.filter((thread) => thread._id === _id)[0]} />))
      .catch(err => console.log(err));
  }

  return (
    <div id="message-container">
      {mainThread}
      <MessageBox messages={messages}/>
      <InputField />
      <button id="message-button" onClick={handleClick}>Submit Message</button>
    </div>
  )
}

export default Messages;
