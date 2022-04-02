import React from 'react';
import '../../../dist/css/Navbar/DesktopNav.css';
import { MenuItems } from './MenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import "../../../dist/css/Navbar/DesktopNav.css";

const listItems = MenuItems.map(item => 
  <li key={item.id}>
    <a href={item.url}>{ item.name }</a>
  </li>
)

export default function DesktopNav() {
  return (
    <div className="desktop-nav-bar">
      <div className="name-container">
        <div className="nav-logo"><FontAwesomeIcon icon={faHome} color='#CB3B1B' size="2x" /></div>
        <div className="nav-name">Home Rentals</div>
      </div>
      <ul className="nav-links">
        {listItems}
      </ul>
    </div>
  );
}