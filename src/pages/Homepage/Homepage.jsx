import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage container">
      <header className="homepage__header">
        <h1 className="homepage__title">Welcome to DateScope💘</h1>
        <p className="homepage__subtitle">Discover personalized and community-driven recommendations for your next date!</p>
      </header>

      <section className="homepage__section">
        <h3 className="homepage__section-title">ChatGPT-Powered Date Suggestions</h3>
        <p className="homepage__text">
          Can't decide where to go? Let our AI-powered assistant help you find the perfect date spot! 
        </p>
      </section>

      <section className="homepage__section">
        <h3 className="homepage__section-title">Google Maps Integration</h3>
        <p className="homepage__text">
          Explore date spots near you with advanced map features powered by Google Maps. 
        </p>
      </section>

      <section className="homepage__section">
        <h3 className="homepage__section-title">Community-Driven Reviews & Favorites</h3>
        <p className="homepage__text">
          Check out reviews and ratings from other couples, and leave your own!
        </p>
      </section>

      <section className="homepage__cta">
        <h3 className="homepage__cta-title">Ready to plan your next date?</h3>
        <Link to="/explore" className="homepage__cta-button">
          Start Exploring Now!
        </Link>
      </section>
    </div>
  );
};

export default Homepage;
