import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="text-3xl font-semibold">Welcome to Our Mobile App</h1>
        <p className="text-lg">Your all-in-one solution for managing tasks on the go!</p>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">Get Started</button>
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
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
