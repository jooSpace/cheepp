import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Login/SignUp" element={<SignUp/>}></Route>
        <Route path='MyProfile' element={<MyProfile/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
