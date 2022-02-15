import React from 'react';
import "./Card.css"
import images from "../../constants/images"
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Card(props) {
  // const xyz = "../." + props.image;

  // const xyz =  "../uploads/birds/New Bitmap Image.bmp";

  // const logo = require(`./../.${props.image}`);
  // console.log(logo);
  // const xyz = "./../../uploads/birds/image.png";
  // const xyz_path = "./../../uploads/birds/image.png";
  // const xyz = require(xyz_path);
  const [imagePath, setimagePath] = useState("");
  useEffect(() => {
    Axios.post("http://localhost:3001/getimage", {path: props.image}).then((response) =>
      setimagePath(response.data)
    );
  }, []);
  return(
    <div class="card">
      <div class="card-header">
        <img src={imagePath} alt="rover" />
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
