import { useState } from 'react';

function Sidebartools() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 


  const handleSubmit = event => {
    event.preventDefault();
    const data = { title, description };
    fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => {
        if(response.ok) alert("Post Saved successfully")
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };


  return (
    <div className="sidebar">
      <h1>Side bar</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="Title" required /> <br/>
        <input type="text" value={description} onChange={event => setDescription(event.target.value)} placeholder="Description" required /> <br/>
     <br/> <br/>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default Sidebartools;
