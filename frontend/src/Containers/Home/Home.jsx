import React, { useState } from "react";

import "./Home.css";
import images from "../../constants/images";
import Home from "./imageslider";
import Navbar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer';
import Cardall from "../Cardall/Cardall";
import Data from "./Data.json"
const Homek = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
var timeoutFunction=()=>{};
function fetchResult(event){
  const searchWord = event.target.value;
  setWordEntered(searchWord);
  const newFilter = Data.filter((value) => {
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (searchWord === "") {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }
};
  const handleFilter = (event) => {
   clearTimeout(timeoutFunction);
   timeoutFunction=setTimeout(fetchResult,2000,event);
  };
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
        onChange={handleFilter}
      />
    

   
    <button type="button" class=" btn btn btn-danger wrn-btn">
        Search
      </button>
      </div>
      

    {filteredData.length != 0 && (
  <div className="dataResult">
    
  
     { 
      filteredData.map((value,key)=>{
return (
<a className="dataItem" href="google.com">
<p>{value.title}</p></a>

)
      })
    }
  </div>
    )
    }
  </div>
   
    </div>
    <Cardall />
    <Footer />
    </div>
  );
};
export default Homek;
