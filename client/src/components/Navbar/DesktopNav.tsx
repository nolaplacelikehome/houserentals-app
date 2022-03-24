import React from 'react';
import '../../../dist/css/Navbar/DesktopNav.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import "../../../dist/css/Navbar/DesktopNav.css";

export default function DesktopNav() {
  return (
    <div className="desktop-nav-bar">
      <div className="name-container">
        <div className="nav-logo"><FontAwesomeIcon icon={faHome} color='#CB3B1B' size="2x" /></div>
        <div className="nav-name">Home Rentals</div>
      </div>
      <ul className="nav-links">
        {MenuItems.map(item => 
          <li key={item.id}>
            <Link to={item.url}>{ item.name }</Link>
          </li>
        )}
      </ul>
    </div>
  );
}