// AboutUs.js
import React from 'react';
import './css/about.css'; 

const About = () => {
  return (
    <section id="main">
      <div className="container">
        <article id="main-col">
          <h1>About Us</h1>
          <p>
            Welcome to Food Delivery, your premier destination for fast, fresh, and convenient food delivery services.
            We are dedicated to bringing the best local flavors right to your doorstep.
          </p>
          <p>
            Our mission is to provide a seamless and enjoyable experience, connecting you with the restaurants you love.
            Whether you're craving a comforting classic or eager to explore new culinary delights, we've got you covered.
          </p>
          <p>
            Founded in 2023, Food Delivery started with a simple idea: to make delicious food accessible to everyone,
            everywhere. We partner with a wide range of restaurants, from cozy neighborhood cafes to upscale dining
            establishments, ensuring a diverse and satisfying selection for our customers.
          </p>
          <p>
            At Food Delivery, we value quality, efficiency, and customer satisfaction. Our team works tirelessly to
            optimize our delivery processes, ensuring that your food arrives hot and on time. We also prioritize
            environmental sustainability, striving to minimize our carbon footprint through eco-friendly practices.
          </p>
          <p>
            Thank you for choosing Food Delivery. We are excited to be a part of your culinary journey and look forward
            to serving you!
          </p>
        </article>

        <aside id="sidebar">
          <div className="dark">
            <h3>What We Do</h3>
            <p>
              We connect you with local restaurants to deliver food to your door. With a wide variety of options and fast delivery,
              we make it easy to enjoy your favorite meals without leaving home.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;