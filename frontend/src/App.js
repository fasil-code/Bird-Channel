import "./App.css";
import React from "react";

import Birding from "./Containers/Birding/Birding";
import Homek from "./Containers/Home/Home";
import Contactm from "./Containers/Contactm/Contactm";
import Birds from "./Containers/Birds/Birds";
import Admin from "./Containers/Admin/Admin";
import axios from "axios";
import { useState } from "react";
import Categbird from "./Containers/Catgbird/Categbird";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./Containers/AboutUs/About";
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homek />} />
          <Route path="/contact" element={<Contactm />} />
          <Route path="/bird" element={<Birds />} />
          <Route path="/conservation" element={<Birding />} />
          <Route path="/birding" element={<Birding />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/bird/categ" element={<Categbird />} />
       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
