import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Mobile App</h1>
        <p>Your all-in-one solution for managing tasks on the go!</p>
        <button>Get Started</button>
      </header>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Intuitive design</li>
          <li>Real-time syncing</li>
          <li>Comprehensive analytics</li>
        </ul>
      </section>
      <footer className="footer">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
