import React from 'react'
 
const Card = (props) => {

    const {img,title,key} = props;
    return (
        
        <div className="card" key={key}>
            <img className="card-img-top" src={img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>           
    )
}

export default Card
