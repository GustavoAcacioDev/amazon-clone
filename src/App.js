import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Páginas
import Home from './containers/Home/Home.js'
import Checkout from './containers/Checkout/Checkout.js'
import Header from './components/Header/Header.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
