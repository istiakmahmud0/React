import React from 'react'
import {useParams,useLocation,useHistory} from 'react-router-dom';
 
// const User = ({match}) => {
//     return (
//         <div>
//            <h1>User Component {match.params.name}</h1> 

//         </div>
//     )
// }

const User = () => {

//   const {name} = useParams();
  let { fname,lname } = useParams();
  let location = useLocation();
  console.log(location);
  let history = useHistory();
  console.log(history);

    return (
        <div>
           <h1>User Component {fname} {lname}</h1> 
           <h2>Location : {location.pathname}</h2>
           {
               location.pathname === `/user/im/saikot` ? (<button onClick={()=>{history.goBack();}}>Click ME</button>): null
           }

        </div>
    )
}



export default User

