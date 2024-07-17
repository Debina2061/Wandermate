import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponent from "./MyFirstComponent";
import Second from "./Second";
import Third from "./Third";
import Nav from "./Nav";
import Signin from "./Signin";
import Signup from "./Signup";
import Landing from "./Landing";
import Sign from "./Sign";
import CounterUse from "./Counteruse";
import HotelList from "./Hotels";
import HeroSection from "./Destination";
import About from "./About";
import Travel from "./Travel";
import Hotel from "./Hotels";






function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/'element={<About/>}/>
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/Counteruse" element={< CounterUse/>}/>
          <Route path="/Destination" element={<HeroSection/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/hotel" element={<HotelList/>}/>
         

          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
