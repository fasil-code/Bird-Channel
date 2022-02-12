import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Admin.css"
import images from "../../constants/images";
const Admin = () => {
return (
    <div>
  <Navbar/>

<div  className="add">
<div class="contact3 py-5">
      <div class="row no-gutters">
        <div class="container">
          <div class="row">
         
            <div class="col-lg-6">
              <div class="contact-box ml-3">
                <h1 class="font-weight-bold mt-2">Add a Bird</h1>
                <form class="mt-4">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Bird Name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Common Name"
                        />
                      </div>
                     
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Category"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Food"
                        />
                      </div>
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Prey"
                        />
                      </div>
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Habitat"
                        />
                      </div>
              

                    </div>
                   
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <textarea
                          class="form-control"
                          rows="3"
                          placeholder="Description"
                        ></textarea>
                      </div>
                      <label for="myfile">Select image</label>
<input type="file" id="myfile" name="myfile" accept="image/*"/>
                    </div>
                 


                    <div class="col-lg-12">
                      <button
                        type="submit"
                        class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
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
  <Footer/>

</div>
);
};

export default Admin;
