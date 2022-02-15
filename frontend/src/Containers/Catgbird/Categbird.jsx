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
  const {id} = useParams();
  const queryParams = new URLSearchParams(window.location.search)
  const c_id = queryParams.get("id")
  const [imagePath, setimagePath] = useState("");
  useEffect((props) => {
    Axios.post("http://localhost:3001/getbirds",{
      c_id: c_id
    }).then((response)=>{
      setbirdCateg(response.data);
    })
  }, []);

  useEffect(() => {
    Axios.post("http://localhost:3001/getimage", {path:imagePath}).then((response) =>
      setimagePath(response.data)
    );
  }, []);
  return (

    <div class="app_categ">
      <Navbar />
      <div className="header ">
        <h1 className="centered">Category Birds</h1>
        <img src={images.texture}></img>
      </div>
      <div className="bird_categ">
        {birdCateg.map((val, key) => {
          return (
            <Link to="/ibird">
              <Card image={"http://localhost:3001/"+val.b_image.slice(10)} title={val.b_name} content={val.b_desc} />
            </Link>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Categbird;
