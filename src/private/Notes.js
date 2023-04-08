import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notes() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostDescription, setNewPostDescription] = useState('');
  const [updatingPostId, setUpdatingPostId] = useState(null);
  const [updatingPostTitle, setUpdatingPostTitle] = useState('');
  const [updatingPostDescription, setUpdatingPostDescription] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/posts');
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
      });
      console.log(response.data);
      fetchPosts();
      setUpdatingPostId(null);
      setUpdatingPostTitle('');
      setUpdatingPostDescription('');
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/posts/${id}`);
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
          <input type="text" placeholder="Title" value={newPostTitle} onChange={(event) => setNewPostTitle(event.target.value)} />
          <input type="text" placeholder="Description" value={newPostDescription} onChange={(event) => setNewPostDescription(event.target.value)} />
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
                <button onClick={() => updatePost(post._id)}>Save</button>
                <button onClick={() => { setUpdatingPostId(null); setUpdatingPostTitle(''); setUpdatingPostDescription(''); }}>Cancel</button>
              </>
            ) : (
              <>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button onClick={() => { setUpdatingPostId(post._id); setUpdatingPostTitle(post.title); setUpdatingPostDescription(post.description); }}>Update</button>
                <button onClick={() => deletePost(post._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
 
  )}

  export default Notes;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Notes() {
//   const [posts, setPosts] = useState([]);
//   const [newPostTitle, setNewPostTitle] = useState('');
//   const [newPostDescription, setNewPostDescription] = useState('');

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/api/posts');
//       setPosts(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addPost = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/api/posts', {
//         title: newPostTitle,
//         description: newPostDescription,
//       });
//       console.log(response.data);
//       fetchPosts();
//       setNewPostTitle('');
//       setNewPostDescription('');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updatePost = async (id, newTitle, newDescription) => {
//     try {
//       const response = await axios.put(`http://localhost:3001/api/posts/${id}`, {
//         title: newTitle,
//         description: newDescription,
//       });
//       console.log(response.data);
//       fetchPosts();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deletePost = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:3001/api/posts/${id}`);
//       console.log(response.data);
//       fetchPosts();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={addPost}>
//         <input type="text" placeholder="Title" value={newPostTitle} onChange={(event) => setNewPostTitle(event.target.value)} />
//         <input type="text" placeholder="Description" value={newPostDescription} onChange={(event) => setNewPostDescription(event.target.value)} />
//         <button type="submit">Add Post</button>
//       </form>

//       <div className="card-container">
//         {posts.map((post) => (
//           <div className="card" key={post._id}>
//             <h2>{post.title}</h2>
//             <p>{post.description}</p>
//             <button onClick={() => updatePost(post._id, `${post.title} UPDATED`, `${post.description} UPDATED`)}>Update</button>
//             <button onClick={() => deletePost(post._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Notes;




// import { useEffect, useState } from 'react';

// function Notes() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/api/posts')
//       .then(response => response.json())
//       .then(posts => setPosts(posts))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
     
//       <div className="card-container">
//         {posts.map(post => (
//           <div className="card" key={post._id}>
//             <h2>{post.title}</h2>
//             <p>{post.description}</p>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Notes;
