import {BrowserRouter, Routes, Route, Navigate}
from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Adminview from "./components/Adminview";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path="/Admin" element={<Admin/>}></Route>
    <Route exact path="/Adminview" element={<Adminview/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
