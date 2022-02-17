import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import images from "../../constants/images";
import "./Birds.css";
import Card from "../../components/Card/Card";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Birds() {
  const [cardData, setCarddata] = useState([]);
  useEffect(() => {
    Axios.get("http://"+window.location.hostname+":3001/bird").then((response) =>
      setCarddata(response.data)
    );
  }, []);

  return (
    <div className="app__bird">
      <Navbar />
      <div className="header1 ">
        <h1 className="centered">Find a Bird of Category</h1>
        <img src={images.wood2}></img>
      </div>
      <div className="bird">
        {cardData.map((val, key) => {
          let value="/bird/categ?id=" + val.c_id;
          return (
           <Link to={value}>
            <Card
           image={"http://"+window.location.hostname+":3001/"+val.c_image.slice(10)}
           title={val.c_name}
           content={val.c_desc}
           />
           </Link> 
          )
        })}
     

      </div>
      <Footer />
    </div>
  );
}

export default Birds;
