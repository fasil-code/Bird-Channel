import React from "react";

import "./Home.css";
import images from "../../constants/images";
import Home from "./imageslider";

const Homek = () => {
  return (
    <div className=" big app__bg  app__wrapper">
      <div className="carosel">

    <Home />

    <div class="row">
      
      <input
        type="text"
        class=" input form-control search-slt"
        placeholder="Enter bird name"
      />
    

   
      <button type="button" class=" btn btn-danger wrn-btn">
        Search
      </button>
  
    
  </div>
      </div>
      
      
   
    </div>
  );
};
export default Homek;
