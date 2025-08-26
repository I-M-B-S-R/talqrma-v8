// src/HomePage.jsx

import React, { useState } from 'react';

function HomePage() {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  return (
    <div className="home-page-container">
      
      {isSearchMenuOpen && <div className="backdrop" onClick={() => setIsSearchMenuOpen(false)}></div>}

      {/* Hero Section */}
      <section className="hero-section">
        <button className="listen-button">▷ Listen to this page</button>
        
        <div className="translate-placeholder">
          <select>
            <option>Select Language</option>
          </select>
          <span>Powered by Google Translate</span>
        </div>

        <h1 className="hero-title">TALQRMA V8</h1>
        <p className="hero-subtitle">THE ARIZONA LAW QUICK REFERENCE MOBILE APP</p>
        <p className="hero-tagline">A curated collection of essential links and resources.</p>

        <div className="search-bar-container">
          <button 
            className="search-button-hero" 
            onClick={() => setIsSearchMenuOpen(true)}
          >
            Search
          </button>
        </div>
      </section>

      {/* The Search Modal */}
      {isSearchMenuOpen && (
        <div className="search-modal">
          <div className="search-modal-header">
            <h2>Search</h2>
            <button className="close-button" onClick={() => setIsSearchMenuOpen(false)}>×</button>
          </div>
          <div className="search-modal-content">
            <input type="text" className="search-modal-input" placeholder="Enter your search text..." />
            <button className="search-modal-button">Search This Page</button>
            <button className="search-modal-button">Search This App</button>
            <button className="search-modal-button">Search PDFs</button>
            <button className="search-modal-button">Search Official Website</button>
            <button className="search-modal-button">Search The Internet</button>
          </div>
        </div>
      )}

      {/* QR Code / Share Section */}
      <section className="share-section">
        <h2>QR CODE For TALQRMA.COM</h2>
        <div className="qr-code-placeholder">QR Code</div>
        <h2>Please Share This APP With Others!</h2>
      </section>

      {/* Category Cards Section */}
      <div className="category-cards-container">
        <a href="#" className="category-card">Federal Laws</a>
        <a href="#" className="category-card">State Laws</a>
        <a href="#" className="category-card">County Laws</a>
        <a href="#" className="category-card">Municipal Laws</a>
        <a href="#" className="category-card">Tribal Laws</a>
        <a href="#" className="category-card">Contact Us</a>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        
        {/* Paragraph 1 */}
        <p>
          Our Mission Is To Provide Every Adult Living In Or Passing Through <strong>"THE GREAT STATE OF ARIZONA"</strong> (And Eventually Every State) With The Most Comprehensive, Quick Reference Mobile App And Legal Research Platform Ever Built! It Has <em>"AUTHENTIC, VERIFIED, AND REGULARLY UPDATED CONTENT FROM OFFICIAL GOVERNMENT SOURCES"</em>! It Will Allow All Persons Using This APP To Understand Their <strong>RIGHTS, AND THEIR OBLIGATIONS, AS PRESCRIBED BY LAW</strong>. The Laws That Govern All Of Us Who Reside In, Or Who Are Passing Through, The 131 Districts That There Are In <strong>"THE GREAT STATE OF ARIZONA"</strong>.
        </p>
        
        {/* Paragraph 2 */}
        <p>
          It Is Our Belief That Most Disagreements Can Be Settled Simply By People <em>"Knowing What The Laws Say, How Judges Have Interpreted Those Laws In The Past, And Are Likely To Interpret Them In Their Particular Case, And How Their Decisions Have Been Documented In (Case Law), And Again, What Their Rights and Obligations Are Under Law, That We All Have To Each Other And To Those Authorities That Have Been Placed Above Us When We Are In, Or Passing Through Their Districts, As Prescribed By Law"</em>!
        </p>
        
        {/* Paragraph 3 */}
        <p>
          In The Past People Had To Rely On Legal Advice Provided By Lawyers In Making Their Decisions, But The Simple Fact Of The Matter Is Most People Cannot Afford A Lawyer's Advice! So, They Called The Police To Settle These Disagreements, The Problem With That Is The Police May Not Know What The Laws Are Themselves, That Deal With The Disagreement That The People Are Having!
        </p>
        
        {/* Paragraph 4 */}
        <p>
          And Unfortunately, When The Police Don't Know The Laws Themselves They Can Be Influenced Not By The Laws Themselves, But By The Perceived Finances Or Political Standing That 1 Party May Have Over The Other In Their Decision Making! <strong>"THATS NOT JUSTICE!"</strong>
        </p>
        
        {/* Paragraph 5 */}
        <p>
          The Other Thing The Police Do Is To Tell People To Go To Court To Settle The Matter, And <span className="text-highlight-red">"IF YOU NEED TO GO TO COURT, YOU WILL NEED A LAWYER!"</span> A Lawyer That Most People Cannot Afford! So, They End Up Forfeiting Their Rights Are Not Proving True To Their Obligations As Prescribed By Law! <strong>"THATS NOT JUSTICE EATHER!"</strong>
        </p>
        
        {/* Paragraph 6 */}
        <p>
          It Is Our Hope That By People Using "The Arizona Law Quick Reference Mobile App", people will understand their "Rights and their Obligations" As Prescribed By Law. The Laws That Govern All Of Us Who Reside In Or Who Are Passing Through The 131 Districts That Are In "The Great State Of Arizona" Educating Them To Be Better Law Abiding Citizens Who Can Settle Disagreements Peacefully, And Legally, Without The Need Of The Police, Paralegals, Lawyers, Or Our Court System, Or Even Our Lawmakers!
        </p>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2025 TALQRMA.COM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;