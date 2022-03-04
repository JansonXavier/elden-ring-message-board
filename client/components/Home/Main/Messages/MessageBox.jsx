import React from 'react';
import SingleMessage from './SingleMessage';

const MessageBox = (props) => {
  const msgs = props.messages.map((msg, i) => <SingleMessage key={`SingleMessage${i}`} msg={msg}/>)

  return (
    <div className='message-box'>
      {msgs}
    </div>
  )
}

export default MessageBox;