import React from 'react';
import "./Card.css"
import images from "../../constants/images"
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Card(props) {
 
 
  return(
    <div class="card">
      <div class="card-header">
        <img src={props.image} alt="rover" />
      </div>
      <div class="card-body">
        <h3 className='h3'>
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
