import React, { useState, useContext, useEffect } from "react";
import { CurThreadContext } from "../../../../contexts/curThreadDetails";
import ThreadItem from "../ThreadItem";
import MessageBox from './MessageBox';
import InputField from "./InputField";
import './MessagePage.css'

const Messages = () => {
  const [mainThread, setMainThread] = useState(null);
  const _id = useContext(CurThreadContext)[0]
  const [messages, setMessages] = useState([]);

  // get current thread
  useEffect(() => {
    fetch('/api/threads/' + _id)
      .then(res => res.json())
      .then(data => {
        setMainThread(<ThreadItem key={`threadItem${0}`} colour={0} thread={data} />)
      })
      .catch(err => console.log(err));

    fetch('/api/messages/' + _id)
      .then(res => res.json())
      .then(data => {
        setMessages(data)
      })
      .catch(err => console.log(err));
  
  }, [])

  // post message form text field
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
      author: 'anonymous',
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

    console.log(messages)

    fetch('/api/message', options)
      .then(res => res.json())
      .then(data => setMessages([...messages, data]))
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
