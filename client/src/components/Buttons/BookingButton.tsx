import React from 'react'
import "../../../dist/css/Buttons/BookingButton.css";
import { Link } from 'react-router-dom';

export default function BookingButton() {
	return (
		<button className='booking-button'><Link to="rent">Rent Now</Link></button>
	)
}
