import React from 'react';
import "./Card.css"
import images from "../../constants/images" 
function Card(props) {
  return(
  
    <div class="container">
    <div class="card">
      <div class="card-header">
        <img src={images.sliderc} alt="rover" />
      </div>
      <div class="card-body">
        <span class="tag tag-teal">{props.tag}</span>
        <h3>
        {props.title}
        </h3>
        <p>
      {props.content}
        </p>      
      </div>
      <button className="custom__button">View More</button>
    </div>
   
    
      </div>
   
  

  );
}

export default Card;
