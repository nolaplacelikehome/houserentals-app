import React from 'react';
import "../../../dist/css/HouseList/IndividualHome.css";
import Homeimg from "../../../assets/Homes.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons';

type HomeProps = {
	name: string,
	dailyPrice: string,
	monthlyPrice: string,
	bedrooms: string,
	bathrooms: string,
}

export default function Homes(props: HomeProps) {
	const { name, dailyPrice, monthlyPrice, bedrooms, bathrooms } = props;

	return (
		<div className='individual-home'>
			<div className="home-thumbnail"><img src={Homeimg} alt="Image of a home" /></div>
			<div className="home-name">{name}</div>
			<div className="prices-container">
				<h5 className="daily-price">${dailyPrice} per day</h5>
				<h5 className="monthly-price">${monthlyPrice} per month</h5>
			</div>
			<div className="bar"></div>
			<div className="home-info-container">
				<span className="home-detail">
					<span className='icon'>
						<FontAwesomeIcon icon={faBed} color='#CB3B1B' size='lg' />		
					</span>
					<h6 className="home-info">{bedrooms}</h6>
				</span>
				<span className="home-detail">
					<span className='icon'>
						<FontAwesomeIcon icon={faBath} color='#CB3B1B' size='lg' />
					</span>
					<h6 className="home-info">{bathrooms}</h6>
				</span>
			</div>
			<button className="rent-button">Rent Now</button>
		</div>
	)
}
