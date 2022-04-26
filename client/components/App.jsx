import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PathContext, AuthContext } from '../context'
import Login from "./Login/Login";
import Home from "./Home/Home";
import ThreadList from "./Home/Main/ThreadList";
import Messages from "./Home/Main/Messages/MessagePage";
import Profile from "./Profile/Profile";

const App = () => {
  const [auth, setAuth] = useState(null)
  const [path, setPath] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path)
  }, [path])

  return (
    <div className="app">
      <PathContext.Provider value={setPath}>
        <AuthContext.Provider value={[auth, setAuth]}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />}>
              <Route path="" element={<ThreadList />} />
              <Route path="messages" element={<Messages />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AuthContext.Provider>
      </PathContext.Provider>
    </div>
  );
}

export default App;
