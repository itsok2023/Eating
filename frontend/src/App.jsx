import React from 'react'
import Navbar from './component/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import './App.css'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
      {/* <Login></Login> */}
      <Navbar></Navbar>
      {/* <Register></Register> */}
      {/* <About></About> */}
      <Contact></Contact>
      {/* <Home></Home> */}
    </div>
  )
}

export default App
