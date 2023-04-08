import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notes(props) {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [newPostDescription, setNewPostDescription] = useState('');
  const [updatingPostId, setUpdatingPostId] = useState(null);
  const [updatingPostTitle, setUpdatingPostTitle] = useState('');
  const [updatingPostDescription, setUpdatingPostDescription] = useState('');
  const [updatingMediaUrl, setUpdatingMediaUrl] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/posts', 
      {
        headers: {Authorization: `Bearer ${props.token}`}
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/posts', {
        title: newPostTitle,
        description: newPostDescription,
        userId: props.userId,
        mediaUrl: mediaUrl
      },{
        headers: {Authorization: `Bearer ${props.token}`}
      });
      console.log(response.data);
      fetchPosts();
      setNewPostTitle('');
      setNewPostDescription('');
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/posts/${id}`, {
        title: updatingPostTitle,
        description: updatingPostDescription,
        mediaUrl: updatingMediaUrl
      }, {
        headers: {Authorization: `Bearer ${props.token}`}
      });
      console.log(response.data);
      fetchPosts();
      setUpdatingPostId(null);
      setUpdatingPostTitle('');
      setUpdatingPostDescription('');
      setUpdatingMediaUrl('');
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/posts/${id}`, {
        headers: {Authorization: `Bearer ${props.token}`}
      });
      console.log(response.data);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='notes-div'>
      <div className='add-post-div'>
        <form onSubmit={addPost}>
          <input type="text" placeholder="Title" value={newPostTitle  } onChange={(event) => setNewPostTitle(event.target.value)} />
          <input type="text" placeholder="Description" value={newPostDescription} onChange={(event) => setNewPostDescription(event.target.value)} />
          <input type="text" placeholder="Media Url" value={mediaUrl} onChange={(event) => setMediaUrl(event.target.value)} />
          <button type="submit">Add Post</button>
        </form>
      </div>
      <div className="card-container">
        {posts.map((post) => (
          <div className="card" key={post._id}>
            {updatingPostId === post._id ? (
              <>
                <input type="text" placeholder="Title" value={updatingPostTitle} onChange={(event) => setUpdatingPostTitle(event.target.value)} />
                <input type="text" placeholder="Description" value={updatingPostDescription} onChange={(event) => setUpdatingPostDescription(event.target.value)} />
                <input type="text" placeholder="Media Url" value={updatingMediaUrl} onChange={(event) => setUpdatingMediaUrl(event.target.value)} />
                <button onClick={() => updatePost(post._id)}>Save</button>
                <button onClick={() => { setUpdatingPostId(null); setUpdatingPostTitle(''); setUpdatingPostDescription(''); }}>Cancel</button>
              </>
            ) : (
              <>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.mediaUrl}</p>
                <button onClick={() => { setUpdatingPostId(post._id); setUpdatingPostTitle(post.title); setUpdatingPostDescription(post.description); setUpdatingMediaUrl(post.mediaUrl) }}>Update</button>
                <button onClick={() => deletePost(post._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
 
  )}

  export default Notes;

