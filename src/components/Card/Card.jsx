import React from 'react';
import "./Card.css"
import images from "../../constants/images" 
function Card(props) {
  return(
  

    <div class="card">
      <div class="card-header">
        <img src={images.sliderc} alt="rover" />
      </div>
      <div class="card-body">
        <h3>
        {props.title}
        </h3>
        <p>
      {props.content}
        </p>      
      </div>
     
    </div>
   
    
      
   
  

  );
}

export default Card;
