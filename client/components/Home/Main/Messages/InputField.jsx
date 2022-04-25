import React from "react";

const InputField = ({ postMessage }) => {
  return <input
    type="text" 
    id="message-input" 
    placeholder="Type message here" 
    onKeyUp={(e) => { if (e.key === 'Enter') postMessage() } }/>;
}

export default InputField;
