import React from 'react';
import { Link } from 'react-router-dom';
import './Aboutpage.scss'; // Include styles here
import snoopy from '../../assets/images/about.png';

const Aboutpage = () => {
  return (
    <section className="aboutpage container">
      <div className="aboutpage__image-container">
        <img className="aboutpage__image" src={snoopy} alt="snoopy cupid"/>
      </div>
      <div>
      <h1 className="aboutpage__title">About Us</h1>
        <h3 className="aboutpage__text">
          Welcome to DateScape, where we help you create memorable experiences through personalized date recommendations.
          Whether you're planning a first date or a special occasion, DateScape uses AI to suggest the perfect spots based on your preferences.
        </h3>
      <h3 className="aboutpage__subtitle">Why DateScape? 💘</h3>
        <h3 className="aboutpage__text">It’s like having your own personal date planner right in your pocket!</h3>
        <p className="aboutpage__text">
        Traditional dating apps help you meet new people, but they often leave you wondering where to take them for the perfect date—especially if you're new to the city. We understand that everyone's idea of a perfect date is different. That's why we tailor our suggestions based on your past choices, favorite activities, and location. 
        </p>
        <p className="aboutpage__text">
        Using cutting-edge AI, DateScape suggests date locations that match your hobbies, mood, and even your partner’s interests, all with a charming Snoopy flair. 
        
        </p>
        
      <h3 className="aboutpage__subtitle">How to Use DateScape 💘</h3>
        <ol className="aboutpage__steps">
          <li className="aboutpage__text">1. Answer a few quick questions about your date preferences, such as location, activities, and budget.</li>
          <li className="aboutpage__text">2. Browse through personalized date ideas based on your input and preferences.</li>
          <li className="aboutpage__text">3. Select your favorite idea and get details like the venue's address, description, and photos.</li>
          <li className="aboutpage__text">4. Share your date idea by clicking the <strong>"Invite Your Date"</strong> button!</li>
        </ol>
      </div>
    </section>
  );
};

export default Aboutpage;
