import React from 'react';
import "./Card.css"
import images from "../../constants/images"

function Card(props) {
  // const xyz = "../." + props.image;

  // const xyz =  "../uploads/birds/New Bitmap Image.bmp";

  // const logo = require(`./../.${props.image}`);
  // console.log(logo);
  // const xyz = "./../../uploads/birds/image.png";
  // const xyz_path = "./../../uploads/birds/image.png";
  // const xyz = require(xyz_path);
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
