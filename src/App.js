
import './App.css';
import Homek from './Containers/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cardall from './Containers/Cardall/Cardall'
function App() {
  return (
    <div className="App">
    <Navbar />
    <Homek />
    <Cardall/>
    <Footer />
    </div>
  
  );
}

export default App;
