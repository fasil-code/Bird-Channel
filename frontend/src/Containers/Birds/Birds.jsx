import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import images from "../../constants/images";
import "./Birds.css";
import Card from "../../components/Card/Card";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function Birds() {
  const [cardData, setCarddata] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/bird").then((response) =>
      setCarddata(response.data)
    );
  }, []);

  return (
    <div className="app__bird">
      <Navbar />
      <div className="header ">
        <h1 className="centered">Find a Bird of Category</h1>
        <img src={images.wood2}></img>
      </div>
      <div className="bird">
        {cardData.map((val, key) => {
          return <Card
          
           title={val.c_name} />;
        })}
     

      </div>
      <Footer />
    </div>
  );
}

export default Birds;
