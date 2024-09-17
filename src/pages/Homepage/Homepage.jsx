import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import cupid from '../../assets/gif/snoopycupid.gif'
import heart from '../../assets/logo/pixel-heart-png.png'

const Homepage = () => {
  return (
    <div className="homepage container">
      <header className="homepage__header">
        <h1 className="homepage__title">Welcome to DateScope</h1>
        <p className="homepage__subtitle">Discover personalized ideas for your next date!</p>
      </header>

      <div className='homepage__gif'>
        <img src={cupid} alt="snoopy cupid"/>
      </div>

      <section className="homepage__section">
        <h3 className="homepage__section-title">ChatGPT-Powered Date Suggestions</h3>
        <h3 className="homepage__cta-title">Ready to plan your next date?</h3>
        <div className='homepage__arrow'>
          <Link to="/explore">
            <img className='logo bounce' src={heart} alt="heart link to explore"/>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Homepage;