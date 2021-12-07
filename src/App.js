import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signin from "./components/signin";
import Nav from "./components/Nav";
import Task from "./components/Task";

function App() {
  
  return (
    <>
          <Routes>
          <Route exact path="/nav" element={<Nav />} />
          <Route exact path="/task" element={<Task />} />
        </Routes>
        
        <Routes>
        <Route exact path="/" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
          </Routes>
    </>
  );
}
export default App;
