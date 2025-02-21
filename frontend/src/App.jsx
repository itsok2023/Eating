import React from 'react'
import Navbar from './component/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import './App.css'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    {" "}
    <BrowserRouter>
    <div>
        <Navbar></Navbar>
        <Routes>
              <Route exact path='/' element={<Home></Home>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
