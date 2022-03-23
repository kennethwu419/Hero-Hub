import React, { useState } from 'react';
import axios from 'axios';

function MessageForm({ setMessages, chatMessages, getChat }) {
  const [inputUser, setInputUser] = useState('');
  const [inputMsg, setInputMsg] = useState('');

  const handleInputUser = (e) => {
    e.preventDefault();
    setInputUser(e.target.value);
  };

  const handleInputMsg = (e) => {
    e.preventDefault();
    setInputMsg(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // using admin user to test post requests

    axios({
      method: 'POST',
      url: '/herohub/chat',
      data: {
        userID: 1,
        body: inputMsg,
      },
    })
      .then(() => getChat())
      .catch((err) => console.log('error message', err));

    setInputMsg('');
    setInputUser('');
  };

  return (
    <div>
      <input
        type='text'
        value={inputUser}
        placeholder='username'
        onChange={handleInputUser}
      />
      <input
        type='text'
        value={inputMsg}
        placeholder='message'
        onChange={handleInputMsg}
      />
      <button onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default MessageForm;

{/* <textarea
value={input}
placeholder="Write message..."
className="new-message-input-field"
onChange={handleInput}
/> */}