import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://node-api-service/send-email', {
        email,
        content,
      });

      alert('Email sent successfully');
    } catch (error) {
      console.error('E-mail sending error:', error);
    }
  };

  return (
    <div className="App">
      <h1>React Send Mail App</h1>
      <div>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" value={content} onChange={handleContentChange} />
      </div>
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default App;
