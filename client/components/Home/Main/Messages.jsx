import React, { useContext } from "react";
import { PathContext } from "../../../pathDetails";

const Messages = (props) => {
  const setPath = useContext(PathContext)
  // get messages from thread

  // map into array

  // display
  return (
    <div>
      Thread Header
      Messages
      Input
      <button onClick={() => {setPath('/home')}}>Home</button>
    </div>
  )
}

export default Messages;
