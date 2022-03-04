import React, { useContext } from "react";
import { CategoryContext } from "../../../contexts/categoryDetails";
import { ThreadContext } from "../../../contexts/threadDetails";
import ThreadItem from "./ThreadItem";
import './ThreadList.scss'

const ThreadList = () => {
  const category = useContext(CategoryContext)[0]
  const [threads, setThreads] = useContext(ThreadContext);

  // Need to handle no topic being entered
  const createThread = () => {
    const { value } = document.getElementById('new-thread-name');
    document.getElementById('new-thread-name').value = '';

    if (value === '') {
      console.log('Topic is required');
      return;
    }

    const body = {
      topic: value,
      created_by: 'anonymous',
      num_msgs: 0,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    }

    fetch('/api/category/' + category, options)
      .then(res => res.json())
      .then(data => setThreads(data))
      .catch(err => console.log(err));
  }

  // Create list of threads
  const threadItems = threads.map((thread, i) => <ThreadItem key={`threadItem${i}`} colour={i} thread={thread} />)

  // display
  return (
    <div>
      <div id='create-search'>
        <button id="create-thread" onClick={createThread}>Create</button>
        <input type="text" id="new-thread-name" placeholder="Topic" />
      </div>
      <hr/>
      <div id="thread-header">
        <p>topic</p>
        <p>created by</p>
        <p>msgs</p>
        <p>-</p>
      </div>
      {threadItems}
    </div>
  )
}

export default ThreadList;
