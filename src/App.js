import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Login/SignUp" element={<SignUp/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
