import React,{useState} from 'react'

const Contact = () => {

  const [data,setData] = useState({
    fullName : "",
    phone:"",
    email:"",
    message:""

  }
  )
  let inputEvent = (e)=>{
      const {name,value} = e.target;
      setData((preVal)=>{
        return{
          // ...preVal,
          ...preVal,
          [name] :value,
        }
            
      })
       
  }

   const formSubmit=(e)=>{
     e.preventDefault();
     alert(`${data.fullName} ${data.phone} ${data.email} ${data.message}`);

   }

    return (
        <section>
    <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto">
           
   <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Full Naame</label>
    <input type="text" className="form-control" id="name"  placeholder="Enter Your Name" 
    name="fullName"
    value={data.fullName}
    onChange={inputEvent}
    
    />
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Phone</label>
    <input type="text" className="form-control" id="phone"  placeholder="Phone NUmber"
     name="phone"
     value={data.phone}
     onChange={inputEvent}
    />
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="email"  placeholder="Enter Your Email"
     name="email"
     value={data.email}
     onChange={inputEvent}
    />
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Message</label>
    <textarea className="form-control" id="text-area"
     name="message"
     value={data.message}
     onChange={inputEvent}
    ></textarea>
  </div>
  
  {/* <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div> */}
  {/* <div className="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    className  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
        </div>
    </div>
    </section>
    )
}

export default Contact
