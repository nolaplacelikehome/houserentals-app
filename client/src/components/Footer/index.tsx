import React from 'react'
import "../../../dist/css/Footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
	return (
		<div className='footer-container'>
			<div className="info-container">
				<div className='icon-container'>
					<h3>Home Rentals</h3>
					<FontAwesomeIcon icon={faHome} color="#CB3B1B" size='lg' />
				</div>
				<div className='links'>
					<ul>
						<li>one</li>
						<li>two</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
