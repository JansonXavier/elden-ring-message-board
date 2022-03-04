import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PathContext } from '../contexts/pathDetails'
import Login from "./Login/Login";
import Home from "./Home/Home";
import ThreadList from "./Home/Main/ThreadList";
import Messages from "./Home/Main/Messages/MessagePage";
import Profile from "./Profile/Profile";
import { AuthContext } from "../contexts/AuthDetails";

const App = () => {
  // Make a default user for guests
  const [auth, setAuth] = useState('tarnished');
  const [path, setPath] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to home if they are already signed in
    navigate(path)
  }, [path])

  return (
    <div className="app">
      <AuthContext.Provider value={[auth, setAuth]}>
      <PathContext.Provider value={setPath}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />}>
              <Route path="" element={<ThreadList />} />
              <Route path="messages" element={<Messages />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </PathContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
