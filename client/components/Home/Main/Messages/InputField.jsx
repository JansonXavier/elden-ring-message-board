import React from "react";

const InputField = (props) => {
  return <input
    type="text" 
    id="message-input" 
    placeholder="Type message here" 
    onKeyUp={(e) => { if (e.key === 'Enter') props.postMessage() } }/>;
}

export default InputField;
