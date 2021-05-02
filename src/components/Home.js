import React from 'react';
import web from '../assets/download.jpg';

const Home = () => {
return (
 <>
 <section id='header' className='mt-5'>
    <div className="container">
        <div className="row">
             
                <div className="col-md-7">
                    <h1>Grow your business <strong>With Our Company</strong></h1>
                    <p>We are Talanted dveloper making Websites</p>
                    <div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={web} alt="Home-img"/>
                </div>           
        </div>
    </div>
 </section>
 </>
)
}

export default Home;