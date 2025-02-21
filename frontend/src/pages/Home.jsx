import React from 'react';
import './css/home.css'; 
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section className="hero">
      
      <div class="auth-buttons">
        <Link to="/login"><button class="login-button">Login</button></Link>
        <Link to="/register"><button class="register-button">Register</button></Link>
    
      </div>
<p></p>
<p></p>
      <div className="hero-content">
        <h1>Delicious Food Delivered to Your Door</h1>
        <p>Order your favorite meals from the best restaurants in town. Fast delivery and easy online ordering.</p>
        <div className="search-bar">
          <input type="text" placeholder="Enter your delivery address" />
          <button>Find Food</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/src/assets/image1.png" alt="Delicious Food" />
        <img src="/src/assets/image2.png" alt="Delicious Food" />
      </div>
      
      

    </section>

    
  )
}

export default Home
