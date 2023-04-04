import React, {useState, useEffect} from "react"
import axios from "axios"
import "../App.css"

function ReadData(){
  const [loadiong, setLoading] = useState(false);
  const [posts, setPosts]= useState([]);


  useEffect ( ()=>{
    const loadPost = async () =>{
      setLoading(true);
      const response = await axios.get("http://localhost:3001/api/posts/");

      setPosts(response.data);

      setLoading(false);
    }
    loadPost();
  }, [] );

  return (
    <>
    <h3>I am from the read_data.js filie</h3>
    <div className="App"> 
      {loadiong? (<h4>Loading...</h4>) : (posts.map((item) =>
      <div className="mydiv">
        <h3> <span style={{"color": "green"}}>key </span>: {item._id} </h3>
        <h3> <span style={{"color": "green"}}>title</span>: {item.title}</h3>
        <h4> <span style={{"color": "green"}}>content</span>: {item.content}</h4>

      </div>
      
      )) }
    </div>
    </>
  )
}

export default  ReadData
