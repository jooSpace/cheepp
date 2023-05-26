import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
