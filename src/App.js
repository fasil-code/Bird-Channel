
import './App.css';
import Birding from './Containers/Birding/Birding';
import Homek from './Containers/Home/Home';
import Contactm from './Containers/Contactm/Contactm';
import Birds from './Containers/Birds/Birds';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
          <Route path="/" element={<Homek />} />
          <Route
            path="/contact"
            element={<Contactm/>}
          />
           <Route
            path="/bird"
            element={<Birds/>}
            
          />
           <Route
            path="/conservation"
            element={<Birding/>}
            
          />
           <Route
            path="/birding"
            element={<Birding/>}
            
          />
           <Route
            path="/#contact"
            element={<Contactm/>}
            
          />
        
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
