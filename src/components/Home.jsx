// components/Home.jsx
import React from 'react';
import './Home.css';  // This imports Home.css from the same directory as Home.jsx
//import foodPlateImage from '../assets/food-plate.png';
import homeimage from './img/home.png';
const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-image" >
            <img src={homeimage} alt="Sandwich and loaded baked potato" />
          </div>
          <div className="hero-text" style={{marginTop:90, color:'gray', }}>
            <h1 style={{fontSize:30}}>
              <span className="food-icon">🍔</span> One Platform, Endless Flavors! <span className="sun-icon">☀️</span>
            </h1>
            <h2>
              Discover, Order, and Relish – All in Just a Few Clicks. <span className="drink-icon">🍹</span>
            </h2>
          <h1> test CICD - new change committed</h1>
            <div className="cta-section">
              <p>Got Ingredients? Let's Make Something Tasty with AI!</p>
              <button className="ask-ai-button">Ask AI</button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Meals Section */}
      <div className="top-meals-section">
        <h2>Top Meals</h2>
        {/* Meal cards would go here */}
      </div>
    </div>
  );
};

export default Home;
