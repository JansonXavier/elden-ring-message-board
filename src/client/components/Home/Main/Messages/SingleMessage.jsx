import React from 'react';

const SingleMessage = (props) => {
  const { message, author, date, _id } = props.msg;

  // create delete method functionaluty
  const deleteMessage = () => {
    console.log('deleting message','api/message/'+_id);

    fetch('api/message/'+_id, { method: 'DELETE' })
      .then(() => props.setMessages((messages) => messages.filter((message) => message._id !== _id)))
  }

  return (
    <div className='msg'>
      <p className='message-text'>{message}</p>
      <button className='message-delete' onClick={deleteMessage}>X</button>
      <p className='message-author'>{author}</p>
      <p className='message-date'>{date}</p>
    </div>
  )
}

export default SingleMessage;