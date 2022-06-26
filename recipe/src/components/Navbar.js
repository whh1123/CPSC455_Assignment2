import React from 'react'


const Navbar = () => {
    return (
      <nav className="Navbar">
        <a href="/" className="brand-name">
          Hannah's recipe
        </a>
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Create">New</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar