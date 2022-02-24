import React, { useState } from "react";

import "./Home.css";
import images from "../../constants/images";
import Home from "./imageslider";
import Axios from "axios";
import { useEffect } from "react";
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

  if (searchWord === "") {
    setFilteredData([]);
  } else {
    Axios.post("http://"+window.location.hostname+":3001/search", {s_query: searchWord}).then((response) => {
      setFilteredData(response.data);
      console.log(response.data);
    }
    );
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
        const bird_url = "/bird/categ/ibird?id=" + value.b_id;
return (
<a className="dataItem" href={bird_url}>
<p>{value.b_name}</p></a>

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
