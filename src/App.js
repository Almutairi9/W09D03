import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signin from "./components/signin";
import Nav from "./components/Nav";
import Task from "./components/Task";
import Home from "./components/Home";

function App() {
  
  return (
    <>
          <Routes>
          <Route exact path="/nav" element={<Nav />} />
          <Route exact path="/task" element={<Task />} />
        </Routes>
        
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
          </Routes>
    </>
  );
}
export default App;
