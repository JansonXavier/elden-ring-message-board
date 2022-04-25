import React, { useState, useContext, useEffect } from "react";
import { CurThreadContext, ThreadContext, AuthContext } from "../../../../context";
import ThreadItem from "../ThreadItem";
import MessageBox from './MessageBox';
import InputField from "./InputField";
import './MessagePage.css'

const Messages = () => {
  const auth = useContext(AuthContext)[0];
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
  const postMessage = () => {
    const { value } = document.getElementById('message-input')
    document.getElementById('message-input').value = '';

    if (value === '') {
      console.log('Message is required');
      return;
    }

    const date = new Date()

    const body = {
      message: value,
      author: auth ? auth.currentUser.get().getBasicProfile().getName() : 'Tarnished',
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
      .then(data => {
        const { topic, created_by, num_msgs, _id } = data.thread
        setMessages([...messages, data.message])
        setMainThread(<ThreadItem key={`threadItem${0}`} colour={0} thread={{ topic, created_by, num_msgs: num_msgs + 1, _id }} />)
      })
      .catch(err => console.log(err));
  }

  return (
    <div id="message-container">
      {mainThread}
      <MessageBox messages={messages} setMessages={setMessages}/>
      <InputField postMessage={postMessage}/>
      <button id="message-button" onClick={postMessage}>Submit Message</button>
    </div>
  )
}

export default Messages;
