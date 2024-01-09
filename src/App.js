import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import "./App.css"; 
import Login from "./Login";

const App = () => {
  return (<div className="bg-purple-300">
      
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

  </div>)
};

export default App;
