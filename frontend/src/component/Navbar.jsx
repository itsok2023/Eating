import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="/vite.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
      FOOD
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>


  </div>
    </nav>
    </div>
  )
}

export default Navbar
