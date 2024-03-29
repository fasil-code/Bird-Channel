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
<Wrap className='wrap'>
              <img className='wrap-bg' src={images.slider1}></img>
              <img className='wrap-sm'  src={images.slidera}></img>
          </Wrap> 
          <Wrap  className='wrap'>
         
              <img className='wrap-bg' src={images.slider2}></img>
              <img className='wrap-sm'  src={images.sliderb}></img>    
          </Wrap>  
          <Wrap  className='wrap'>
              <img className=' wrap-bg' src={images.slider3}></img>
              <img className=' wrap-sm'  src={images.sliderc}></img>
          </Wrap>  
          <Wrap  className='wrap'>
              <img className='wrap-bg' src={images.slider4}></img>
              <img className='wrap-sm'  src={images.sliderc}></img>
          </Wrap> 
</Carousel>
  
)
}
const Carousel=styled(Slider)`
margin:0 50px;
margin-top:0;
object-fit:cover;
.slick-list{
overflow:hidden;
}
button{
    z-index:1;
}


li.slick-active button:before{ 
 color:white;  
}
${'' /* @media (max-width: 950px) {
   height:550px;
   margin:0 20px;
   .wrap{
    height:550px;   
   }
} */}
@media (max-width: 950px) {
   height:320px;
   margin:0 20px;
   .wrap{
    height:300px; 
    transition:none;  
  
    padding-left:0;
   }
   .wrap img{
    max-width: 100%;
  width: auto   9;
  height: 100%;
  vertical-align: middle;
box-shadow:none;

  -ms-interpolation-mode: bicubic;
   }
}
`
const Wrap=styled.div`
img{
    
    border:4px solid transparent;
    border-radius:4px;
    width:100%;
    height:60vh;
    border:2px solid white;
   object-fit:cover;
    ${'' /* box-shadow:rgb(0 0 0 / 100%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:600ms; */}
    opacity:0.8;
    &:hover{
    cursor:pointer;
${'' /* border:4px solid rgb(255,255,255); */}

    }
 


 

    
}
.wrap-sm{
    display:none;
  }
  @media screen and (max-width: 950px) {
    .wrap-bg{
        display:none;
        
    }
    .wrap-sm{
        max-width:100%;
        display:block;
        
    }
}


`

export default Home;
