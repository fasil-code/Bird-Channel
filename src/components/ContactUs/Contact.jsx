import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div class="contact3 py-5">
      <div class="row no-gutters">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="card-shadow">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-box ml-3">
                <h1 class="font-weight-bold mt-2">Quick Contact</h1>
                <form class="mt-4">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="email"
                          placeholder="email address"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="phone"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-2">
                        <textarea
                          class="form-control"
                          rows="3"
                          placeholder="message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button
                        type="submit"
                        class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                      >
                        <span> SUBMIT</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="container">
            <div class="row" >      
                  <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" height="75px"/>
                  <br/>
                    <h6 class="font-weight-medium">Adress</h6>
                    <p class="font-weight-bold ">qazigund
                      <br/>Anantnag</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" height="75px"/>
                    <br/>
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="font-weight-bold">251 546 9442
                      <br/> 630 446 8851</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" height="75px"/>
                    <br/>
                    <h6 class="font-weight-medium align-items-center">Email</h6>
                    <p class="font-weight-bold">
                      info@wrappixel.com
                      <br/> 123@wrappixel.com
                    </p>
                </div>
              </div>
            </div>
            </div>




            </div>
    </div>
    </div>
    </div>
   
  );
}

export default Contact;
