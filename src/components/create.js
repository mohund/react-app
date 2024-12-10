import React, { useState } from 'react';
import './create.css';

const apiUrl = 'http://localhost:3000/api';

function Create() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() && url.trim()) {
      try {
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, url }),
        };
        await fetch(`${apiUrl}/create.php`, options);
        alert('Bookmark created successfully!');
        setTitle('');
        setUrl('');
      } catch (error) {
        console.error('Error creating bookmark:', error);
      }
    }
  };

  return (
    <div className="create-container">
      <h2>Create a New Bookmark</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Add Bookmark</button>
      </form>
    </div>
  );
}

export default Create;
