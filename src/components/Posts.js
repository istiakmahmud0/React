import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Posts = () => {
   const [posts,setPosts] = useState([]);
   useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((res)=>{
           setPosts(res.data);
        //    console.log(res.data);
       })
       .catch(err=>console.log(err));
   },[]);
    return (
        <div className="pt-5 w-50 m-auto">
            
             {
                 posts.map(post=>{
                     return <div key={post.id}>
                         <Link to={`posts/${post.id}`}><h4 className="bg-dark text-white p-3">{post.title}</h4></Link>                      
                     </div>
                 })
             }
        </div>
    )
}
export default Posts;
