import React from 'react'
import "../../../dist/css/Footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { MenuItems } from '../Navbar/MenuItems';

const listItems = MenuItems.map(item =>
	<li key={item.id}><a href={item.url}>{item.name}</a></li>
);

export default function Footer() {
	return (
		<div className='footer-container'>
			<div className='company-container'>
				<div className="title">
					<FontAwesomeIcon className='footer-icon' icon={faHome} color="#CB3B1B"  />
					<h3>Home Rentals</h3>
				</div>
				<p>Customer service is our top priority. Customer service is available 24/7</p>
			</div>
			<div className="link-container">
				<h4>Links</h4>
				<ul>
					{listItems}
				</ul>
			</div>
			<div className="social-container">
				<h4>Social</h4>
				<a href="https://github.com/nolaplacelikehome" target="_blank">GitHub</a>
				<a href="#">Email</a>
			</div>
		</div>
	)
}