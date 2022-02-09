import React from "react";

import "./Home.css";
import images from "../../constants/images";
import Home from "./imageslider";
import Navbar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer';
import Cardall from "../Cardall/Cardall";
const Homek = () => {
  return (
    <div>
  <Navbar />
    <div className=" big app__bg  app__wrapper">
      <div className="carosel">

    <Home />

    <div class="row">
      
      <input
        type="text"
        class=" input form-control search-slt"
        placeholder="Enter bird name"
      />
    

   
      <button type="button" class=" btn btn btn-danger wrn-btn">
        Search
      </button>
  
    
  </div>
      </div>
      
      
   
    </div>
    <Cardall />
    <Footer />
    </div>
  );
};
export default Homek;
