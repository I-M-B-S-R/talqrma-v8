import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="layout-wrapper">
      {/* Floating Navigation Buttons */}
      <button onClick={() => navigate(-1)} className="nav-arrow left-arrow" title="Go Back">
        &#11164;
      </button>
      <button onClick={() => navigate(1)} className="nav-arrow right-arrow" title="Go Forward">
        &#11166;
      </button>

      {/* This is the main pinstriped container for content */}
      <div className="app-container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;