import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Services from './Services';
import Scheme from './Scheme';
import LoginPage from './LoginPage';

const FullPageImage = () => (
  <marquee direction ="right"> <img
  src="https://pbs.twimg.com/media/Fn0DT5xaIAAtAY_.jpg" // Replace with the actual URL of the full-page image
  alt="Full Page Image"
/>


<div className="full-page-image">
</div></marquee> 
);

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-links">
        <Link to="/favorites">Add To Favorites</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/about">About this Portal</Link>
        <Link to="/sitemap">SiteMap</Link>
        <Link to="/holidays">Holidays</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/statistics">E-District Statistics</Link>
      </div>
      <div className="footer-info">
        <p>Last Updated: Nov 29, 2023</p>
        <p>
          Contents owned and updated by concerned Departments and coordinated by Information Technology Department Secretariat,
          Fort St. George, Chennai 600 009, Tamil Nadu, India
        </p>
        <p>Fight against COVID-19 India Code Designed & Developed by National Informatics Centre</p>
        <p>E-Mail: webadmin.tn@nic.in</p>
      </div>
    </div>
    <div className="footer-disclaimer">
      <p>Disclaimer | Privacy Policy | Terms of Use</p>
    </div>
  </footer>
);

const schemeDetails = [
  'Pradhan Mantri Jan Dhan Yojana',
  'Swachh Bharat Abhiyan',
  'Ayushman Bharat Yojana',
  'Digital India',
  // Add more scheme details as needed
];

const App = () => {
  const [showFlag, setShowFlag] = useState(true);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Set a timeout to hide the flag after 1 second
    const timeout = setTimeout(() => {
      setShowFlag(false);
    }, 1000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPage(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSearch = (query) => {
    // Handle search logic here
    console.log('Search query:', query);
  };

  return (
    <Router>
      <div className="app">
        {showFlag && (
          <div className="indian-flag">
            <img
              src="https://think360studio-media.s3.ap-south-1.amazonaws.com/download/india-flag-2021-wallpaper-1.png"
              alt="Indian Flag"
              className="flag-image"
            />
          </div>
        )}

        <header>
          <div className="logo-container">
            <img
              src="https://i.postimg.cc/KvGkrbjR/images-removebg-preview-1.png"
              alt="Logo"
              className="first-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Emblem_of_India_%28Government_Gazette%29.svg/1200px-Emblem_of_India_%28Government_Gazette%29.svg.png"
              alt="Logo"
              className="logo"
            />
            <img
              src="https://i.postimg.cc/h4JyM8dF/Screenshot-2023-12-01-092756-removebg-preview.png"
              alt="Additional Logo"
              className="additional-logo"
            />
          </div>
          <h1>Government Scheme Web App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/scheme">Scheme</Link></li>
              <li className={`login-btn ${isLoggedIn ? 'logged-in' : ''}`}>
                {isLoggedIn ? (
                  <>
                    <span>Welcome, User!</span>

                    <Link to="/fullpageimage">
                      <button className="full-image-btn">Logout</button>
                    </Link>
                  </>
                ) : (
                  <>
                    <a href="#" onClick={toggleLoginPage}>Login</a>
                    <input type="text" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
                  </>
                )}
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/scheme" element={<Scheme />} />
            <Route path="/fullpageimage" element={<FullPageImage />} />
          </Routes>
        </main>

        {showLoginPage && <LoginPage onLogin={handleLogin} onClose={toggleLoginPage} />}
      </div>
      <Footer />
    </Router>
  );
};

export default App;