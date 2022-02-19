import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
      <label for="myfile">Select image</label>
                          <input
                          className="form-control"
                            type="file"
                            id="myfile"
                            name="myfile"
                            accept="image/*"
                           
                          />
                          </div>
                          <div className="form-group">
                     <label for="myfile">Select sound</label>
                          <input
                          className="form-control"
                            type="file"
                            id="myfile"
                            name="myfile"
                            accept="audio/*"
                           
                          />    
                          </div>   
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
