import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Notes(props) {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [newPostDescription, setNewPostDescription] = useState('');
  const [updatingPostId, setUpdatingPostId] = useState(null);
  const [updatingPostTitle, setUpdatingPostTitle] = useState('');
  const [updatingPostDescription, setUpdatingPostDescription] = useState('');
  const [updatingMediaUrl, setUpdatingMediaUrl] = useState('');
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = useState({});
  const [opendialog, setOpendialog] = useState(false);

  const handleDialogOpen = () => {
    setOpendialog(true);
  };

  const handleDialogClose = () => {
    setOpendialog(false);
  };

  const handleExpandClick = (postId) => {
    setExpanded({
      ...expanded,
      [postId]: !expanded[postId]
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/posts',
        {
          headers: { Authorization: `Bearer ${props.token}` }
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
      }, {
        headers: { Authorization: `Bearer ${props.token}` }
      });
      //console.log(response.status);
      if (response.status === 201) {
        alert("Created...")
        handleClose()
      }
      fetchPosts();
      setNewPostTitle('');
      setNewPostDescription('');
      setMediaUrl('');
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
        headers: { Authorization: `Bearer ${props.token}` }
      });
     // console.log(response.data);
     if (response.status === 200) {  handleDialogClose() }
      fetchPosts();
      setUpdatingPostId(null);
      setUpdatingPostTitle('');
      setUpdatingPostDescription('');
      setUpdatingMediaUrl('');
    } catch (error) {
      if (error.response.status === 403) alert("Access Denied!")
      else { console.log(error); }
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${props.token}` }
      });
      //console.log(response.status);
      if (response.status === 200) {  handleDialogClose() }
      fetchPosts();
    } catch (error) {
      if (error.response.status === 403) { alert("Access Denied!"); handleDialogClose() }
      else {
        console.log(error);
      }
    }
  };

  return (
    <div className='notes-div'>
      <div className='add-post-div'>
        <Button className='new-post-div' variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>

          New Post
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To help others, please enter title, description clear here. We
              will take care of it for next gen.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              value={newPostTitle}
              onChange={(event) => setNewPostTitle(event.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              value={newPostDescription}
              onChange={(event) => setNewPostDescription(event.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Media Url"
              type="text"
              fullWidth
              variant="standard"
              value={mediaUrl}
              onChange={(event) => setMediaUrl(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={addPost}>Post</Button>
          </DialogActions>
        </Dialog>
        {/* <button onClick={() => setShowAddPost(true)}>New Post</button>
        {showAddPost && (
          <div className='new-post-form'>
            <form onSubmit={addPost}>
              <input type="text" placeholder="Title" value={newPostTitle} onChange={(event) => setNewPostTitle(event.target.value)} />
              <input type="text" placeholder="Description" value={newPostDescription} onChange={(event) => setNewPostDescription(event.target.value)} id='description' />
              <input type="text" placeholder="Media Url" value={mediaUrl} onChange={(event) => setMediaUrl(event.target.value)} />
              <button type="submit">Add Post</button>
            </form>
          </div>
        )} */}
      </div>
      <div className="posts-card-container">
        {posts.map((post) => (
          <div className="card" key={post._id}>
            {updatingPostId === post._id ? (
              <>
                {/* <input type="text" placeholder="Title" value={updatingPostTitle} onChange={(event) => setUpdatingPostTitle(event.target.value)} id='title' />
                <input type="text" placeholder="Description" value={updatingPostDescription} onChange={(event) => setUpdatingPostDescription(event.target.value)} />
                <input type="text" placeholder="Media Url" value={updatingMediaUrl} onChange={(event) => setUpdatingMediaUrl(event.target.value)} />
                <button onClick={() => updatePost(post._id)}>Save</button>
                <button onClick={() => { setUpdatingPostId(null); setUpdatingPostTitle(''); setUpdatingPostDescription(''); }}>Cancel</button> */}

                <Dialog open={updatingPostId === post._id} onClose={() => { setUpdatingPostId(null); setUpdatingPostTitle(''); setUpdatingPostDescription(''); setUpdatingMediaUrl(''); }}>
                  <DialogTitle>Edit Post</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Update the details of the post.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="title"
                      label="Title"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={updatingPostTitle}
                      onChange={(event) => setUpdatingPostTitle(event.target.value)}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="description"
                      label="Description"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={updatingPostDescription}
                      onChange={(event) => setUpdatingPostDescription(event.target.value)}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="media-url"
                      label="Media URL"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={updatingMediaUrl}
                      onChange={(event) => setUpdatingMediaUrl(event.target.value)}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => { setUpdatingPostId(null); setUpdatingPostTitle(''); setUpdatingPostDescription(''); setUpdatingMediaUrl(''); }}>Cancel</Button>
                    <Button onClick={() => { updatePost(post._id); setUpdatingPostId(null); setUpdatingPostTitle(''); setUpdatingPostDescription(''); setUpdatingMediaUrl(''); }}>Save</Button>
                  </DialogActions>
                </Dialog>
              </>
            ) : (
              <>

                <div className='posts-card'>
                  {
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {post.title[0]}
                          </Avatar>
                        }
                        action={
                          <>
                            <IconButton aria-label="settings" onClick={handleDialogOpen} >
                              <MoreVertIcon />
                            </IconButton>
                            <Dialog open={opendialog} onClose={handleDialogClose} >
                              <DialogTitle>{"Options"}</DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  What do you want to do with this post?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <IconButton aria-label="edit" onClick={() => { setUpdatingPostId(post._id); setUpdatingPostTitle(post.title); setUpdatingPostDescription(post.description); setUpdatingMediaUrl(post.mediaUrl) }}>
                                  <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => deletePost(post._id)}>
                                  <DeleteIcon />
                                </IconButton>
                              </DialogActions>
                            </Dialog>
                          </>
                        }
                        title={post.title}
                        subheader="September 14, 2016"
                      />
                      <CardMedia
                        component="img"
                        height="345"
                        image="https://cdn-icons-png.flaticon.com/512/78/78686.png"
                        alt="Notes"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          <a style={{ textDecoration: "none" }} href={post.mediaUrl}>{post.mediaUrl}</a>
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <ExpandMore
                          expand={expanded[post._id]}
                          onClick={() => handleExpandClick(post._id)}
                          aria-expanded={expanded[post._id]}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse in={expanded[post._id]} timeout="auto" unmountOnExit>
                        <CardContent sx={{ overflowX: 'auto' }}>
                          <Typography paragraph>Description:</Typography>
                          <Typography sx={{ maxWidth: 345 }}>
                            {post.description}
                          </Typography>


                        </CardContent>
                      </Collapse>
                    </Card>

                  }
                </div>

                {/* <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.mediaUrl}</p>
                <button onClick={() => { setUpdatingPostId(post._id); setUpdatingPostTitle(post.title); setUpdatingPostDescription(post.description); setUpdatingMediaUrl(post.mediaUrl) }}>Update</button>
                <button onClick={() => deletePost(post._id)}>Delete</button> */}
              </>
            )}
          </div>
        ))}
      </div>
    </div>

  )
}

export default Notes;

