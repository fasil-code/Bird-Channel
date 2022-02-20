import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Admin.css";
import Axios from "axios";
import { useEffect } from "react";
import images from "../../constants/images";
const Admin = () => {
  const [birdName, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [commonName, setcommonName] = useState("");
  const [food, setfood] = useState("");
  const [prey, setprey] = useState("");
  const [habitat, sethabitat] = useState("");
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState("");
  const [audio, setaudio] = useState("");
  const [categoryList, setCategorylist] = useState([]);
  const addCard = () => {
    const data = new FormData();
    data.append("b_name", birdName);
    data.append("b_cname", commonName);
    data.append("b_food", food);
    data.append("b_prey", prey);
    data.append("b_habitat", habitat);
    data.append("b_desc", desc);
    data.append("b_image", image.selectedFile);
    data.append("b_audio", audio.selectedFile);
    data.append("b_categ", Category);
    Axios.post("http://"+window.location.hostname+":3001/admin", data).then(() => {
      console.log("success");
    });
  };

  useEffect(() => {
    Axios.get("http://"+window.location.hostname+":3001/admin").then((response) =>
      setCategorylist(response.data)
    );
  }, []);

  return (
    <div>
      <Navbar />

      <div className="add">
        <div className="contact3 py-5">
          <div className="row no-gutters">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-box ml-3">
                    <h1 className="font-weight-bold mt-2">Add a Bird</h1>
                    <form className="mt-4">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Bird Name"
                              onChange={(event) => {
                                setName(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Common Name"
                              onChange={(event) => {
                                setcommonName(event.target.value);
                              }}
                            />
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <select
                                class="form-control"
                                list="hosting-plan"
                                placeholder="Category"
                                onChange={(event) => {
                             setCategory(event.target.value);
                              }}>
                              <option>Select Category</option>
                                {categoryList.map((val, key) => {
                               
                                  return <option value={val.c_id}>{val.c_name}</option>;
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Food"
                              onChange={(event) => {
                                setfood(event.target.value);
                              }}
                            />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Prey"
                              onChange={(event) => {
                                setprey(event.target.value);
                              }}
                            />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Habitat"
                              onChange={(event) => {
                                sethabitat(event.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <textarea
                              className="form-control"
                              rows="3"
                              placeholder="Description"
                              onChange={(event) => {
                                setdesc(event.target.value);
                              }}
                            ></textarea>
                          </div>
                          
                          <div>
                          <label for="myfile">Select Image:</label>
                          <br/>
                          <input
                            type="file"
                            id="myfile"
                            name="myfile"
                            accept="image/*"
                            onChange={(event) => {
                              setimage({ selectedFile: event.target.files[0] });
                            }}
                          />
                          </div>
                          <div>
                          <label for="myaudio">Select Audio:</label>
                          <br/>
                          <input
                            type="file"
                            id="myaudio"
                            name="myaudio"
                            accept="audio/*"
                            onChange={(event) => {
                              setaudio({ selectedFile: event.target.files[0] });
                            }}
                          />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <button
                            className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                            onClick={addCard}
                          >
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
