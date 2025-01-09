import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [inputValue, setInputValue] = useState('');

      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

      return (
        <div className="app-container">
          <header className="header">
            <div className="header-left">
              <div className="logo">
                <span className="company-name">validare</span>
              </div>
              <nav className="nav">
                <a href="#" className="nav-link">Vision</a>
                <a href="#" className="nav-link">Blogs</a>
                <a href="#" className="nav-link">Pricing</a>
                <a href="#" className="nav-link">Support</a>
              </nav>
            </div>
            <div className="header-right">
              <a href="#" className="auth-link signin-button">Sign in</a>
              <a href="#" className="auth-link signup-button">Sign up</a>
            </div>
          </header>
          <main className="main-content">
            <h1 className="main-heading">
              Find & validate ideas on <span className="reddit-box">reddit</span>
            </h1>
            <h2 className="sub-heading">Break out of analysis paralysis.</h2>
            <div className="input-container">
              <textarea
                className="search-input"
                placeholder="Search for a problem..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="search-button">
                <span className="search-button-text">Search</span>
              </button>
            </div>
          </main>
        </div>
      );
    }

    export default App;
