import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
      <input type='date'
      className="form-control"
       />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
      <textarea
                          class="form-control"
                          rows="3"
                          placeholder="Description"
                          name="message"
                        ></textarea>
                        </div>
      <div className="form-group">
      <label for="myfile">Select image</label>
                          <input
                        
                            type="file"
                            id="myfile"
                            name="myfile"
                            accept="image/*"
                           
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
