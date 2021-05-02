import React from 'react'
import Card from './Card';
import Sdata from './Sdata';


const Services = () => {
return (
<section>
    <div className="my-5">
        <h1 class="text-center">Our Services</h1>
    </div>
    <div className="container">
        <div className="row">


         
           {    
                 Sdata.map((val,index)=>(
                    <div className="col-md-4 mb-3">
                      <Card img={val.imgSrc} title = {val.title} key={index}/>
                      </div>
                 ))
             
             }
              
          
          
            
        </div>
    </div>
</section>
)
}

export default Services