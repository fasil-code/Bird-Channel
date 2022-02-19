import React from 'react';
import { useState } from "react";
import Axios from "axios";

export const Form = ({ onSubmit }) => {
  const [uName, setuName] = useState("");
  const [uDate, setuDate] = useState("");
  const [uLocation, setuLocation] = useState("");
  const [uDesc, setuDesc] = useState("");
  const [uImage, setuImage] = useState("");

  const addBirdUpload = () => {
    const data = new FormData();
    data.append("u_photographer", uName);
    data.append("u_date", uDate);
    data.append("u_location", uLocation);
    data.append("u_desc", uDesc);
    data.append("u_image", uImage.selectedFile);
    const queryParams = new URLSearchParams(window.location.search)
    const b_id = queryParams.get("id")
    data.append("b_id", b_id);
    Axios.post("http://"+window.location.hostname+":3001/postbirduploads", data).then(() => {
      console.log("suces");
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" onChange={(event) => {setuName(event.target.value);}} />
      </div>
      <div className="form-group">
      <input type='date' className="form-control" onChange={(event) => {setuDate(event.target.value);}} />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input className="form-control" onChange={(event) => {setuLocation(event.target.value);}} />
      </div>
      <div className="form-group">
        <textarea class="form-control"
                  rows="3"
                  placeholder="Description"
                  name="message"
                  onChange={(event) => {setuDesc(event.target.value);}}>
        </textarea>
      </div>
      <div className="form-group">
        <label for="myfile">Select image</label>
        <input  type="file"
                id="myfile"
                name="myfile"
                accept="image/*"
                onChange={(event) => {setuImage({ selectedFile: event.target.files[0] });}} />
      </div>
                      
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit" onClick={addBirdUpload}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
