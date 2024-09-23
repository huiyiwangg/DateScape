import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import cupid from '../../assets/gif/snoopycupid.gif'
import heart from '../../assets/logo/pixel-heart-png.png'

const Homepage = () => {
  return (
      <section className="homepage container">
        <h1 className="homepage__title">Welcome to DateScape💘</h1>
        <div className='homepage__gif'>
          <img src={cupid} alt="snoopy cupid"/>
        </div>
        <h4 className="homepage__section-title">ChatGPT-Powered Personalized Date Ideas</h4>
        <h3 className="homepage__cta-title">Ready to plan your next date?</h3>
        <div className='homepage__arrow'>
          <Link to="/explore">
            <img className='logo bounce' src={heart} alt="heart link to explore"/>
          </Link>
        </div>
      </section>
  );
};
export default Homepage;