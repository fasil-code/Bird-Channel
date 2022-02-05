import React,{ useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
function Navbar(props){
   const [toogleMenu, setToogle] = useState(false);
    return (
        <div className="app__navbar">
   <a className="app__navbar_logo">
     <img src={images.logo} alt="hip"></img>  
   </a>
   <div className="app__navbar_links flex__center">
   
<p className="app__openans"><a href="#">Home</a></p>
<p  className="app__openans"><a href="#">About</a></p>
<p  className="app__openans"><a href="#">Manual</a></p>
<p  className="app__openans"><a href="#">Contact us</a></p>
   </div>
   <div style={{cursor:"pointer"  }} className="app__navbar-hamburger flex__center">

<p color ="white" onClick={() => setToogle(true)}><img src={images.hamburg} ></img></p>
</div>
{
   toogleMenu && (
      <div className="app__navbar_overlay" >
<div className="wrapper"><close  onClick={() => setToogle(false)} ><img src={images.xi}></img></close></div>
<div className="app__mobile-links">
<p className="app__mobile-openans" style={{transform:"none"}}><a href="#">Home</a></p>
<p  className="app__mobile-openans"><a href="#about">About</a></p>
<p  className="app__mobile-openans"><a href="#manual">Manual</a></p>
<p  className="app__mobile-openans"><a href="#contact">Contact us</a></p>
</div>
</div>


   ) 
}



        </div>
    );
}


export default Navbar;
