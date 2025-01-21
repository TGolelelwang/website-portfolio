import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './Pages/Home/NavBar';
import Home from './Pages/Home/HomeScreen';
import MyPortfolio from './Pages/Home/MyPortfolio';
import AboutMe from './Pages/Home/AboutMe';
import ContactMe from './Pages/Home/ContactMe';
import MySkills from './Pages/Home/MySkills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar/>
          <Routes>
            <Route path = "/" element ={<Home/>}></Route>
            <Route path = "/skills" element ={<MySkills/>}></Route>
            <Route path = "/portfolio" element ={<MyPortfolio/>}></Route>
            <Route path = "/about" element ={<AboutMe/>}></Route>
            <Route path = "/contact" element ={<ContactMe/>}></Route>
            <Route path = "*" element ={<div> 404 Not Found</div>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
