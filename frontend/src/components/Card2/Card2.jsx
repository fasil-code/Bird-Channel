import React from 'react';
import "./Card2.css"
import moment from "moment";

function Card2(props) {
  let dete=  moment.utc(props.date).format('MM/DD/YY');
 
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
      Date:{dete}
        </p>  
        <p>
     Location: {props.location}
        </p>
        <p>
    Description: {props.content}
        </p>     
      </div>
     
    </div>
  );
}

export default Card2;
