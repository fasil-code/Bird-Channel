import React from 'react';
import "./Card.css"
import images from "../../constants/images" 
function Card() {
  return(
  
    <div class="container">
    <div class="card">
      <div class="card-header">
        <img src={images.sliderc} alt="rover" />
      </div>
      <div class="card-body">
        <span class="tag tag-teal">Technology</span>
        <h4>
          Why is the Tesla Cybertruck designed the way it
          is?
        </h4>
        <p>
          An exploration into the truck's polarising design
        </p>      
      </div>
    </div>
    
      </div>
   
  

  );
}

export default Card;
