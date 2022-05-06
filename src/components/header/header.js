import React from "react";

import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Star DB</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">People</a>
          </li>
        </ul>
      </nav> 
    </header>
  )
}

export default Header;