import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const Details = ({ match }) => {
    const[post,setPost] = useState({
        id:"",
        title:"",
        body:""
    });
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((res)=>{
          setPost(
              {
                 id:res.data.id,
                 title:res.data.title,
                 body:res.data.body 
              }
          )
      })
      
      .catch((err)=>{
         console.log(err.message);
      });
   
    }, [])
    return (
        <div className="w-75 mx-auto bg-info mt-5">
          <h4 className="bg-info text-white p-3">{post.title}</h4>
          <p className="text-white p-3 no-gutters">{post.body}</p>
          <Link to="/posts" className="bg-dark d-block text-center w-25 mx-auto shadow">Back</Link>
        </div>

    )
}

export default Details
