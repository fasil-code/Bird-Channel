import React from 'react';

import './Home.css';
import images from "../../constants/images";

import Slider from "react-slick";
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  var setting={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
}

return (
 
<Carousel {...setting} >
<Wrap>
              <img src={images.slider1}></img>
          </Wrap> 
          <Wrap>
              <img src={images.slider2}></img>
          </Wrap>  
          <Wrap>
              <img src={images.slider3}></img>
          </Wrap>  
</Carousel>
  
)
}
const Carousel=styled(Slider)`
margin:0 50px;
margin-top:0;
.slick-list{
overflow:visible;
}
button{
    z-index:1;
}


li.slick-active button:before{ 
 color:white;  
}

`
const Wrap=styled.div`
img{
    
    border:4px solid transparent;
    border-radius:4px;
    width:100%;
    height:60vh;
    box-shadow:rgb(0 0 0 / 100%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:600ms;
    &:hover{
        cursor:pointer;
border:4px solid rgba(249,249,249,0.8);
    }
}
`
export default Home;
