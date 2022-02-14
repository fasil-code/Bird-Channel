import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import images from "../../constants/images";
import {useParams} from 'react-router-dom';
import "./Categbird.css";
import Axios from "axios";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
function Categbird() {
  const [birdCateg, setbirdCateg] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/bird/categbird").then((response) =>
      setbirdCateg(response.data)
    );
  }, []);
  const {id} = useParams();
  const queryParams = new URLSearchParams(window.location.search)
  const c_id = queryParams.get("id")

Axios.post("http://localhost:3001/getbirds",{
c_id: c_id

}).then((response)=>{
  console.log(response.data);
})

  return (

    <div class="app_categ">
      <Navbar />
      <h1>Product id: {id}</h1>
      <div className="header ">
        <h1 className="centered">category</h1>
        <img src={images.texture}></img>
      </div>
      <div className="bird_categ">
        {birdCateg.map((val, key) => {
          return (
            <Link to="/ibird">
              <Card title={val.c_name} content={val.c_desc} />
            </Link>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Categbird;
