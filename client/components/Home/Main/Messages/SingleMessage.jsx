import React from 'react';

const SingleMessage = (props) => {
  const { message, author, date } = props.msg;

  return (
    <div className='msg'>
      <p className='message-text'>{message}</p>
      <p className='message-author'>{author}</p>
      <p className='message-date'>{date}</p>
    </div>
  )
}

export default SingleMessage;