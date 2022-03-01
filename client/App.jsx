import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Login/Login.jsx";
import Home from "./Home/Home.jsx";
import Profile from "./Profile/Profile.jsx";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/profile" element={ <Profile/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
