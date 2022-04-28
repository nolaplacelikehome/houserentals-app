import React from 'react'
import BookingButton from '../Buttons/BookingButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';	
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';

import "../../../dist/css/BookingCard/DesktopCard.css";


export default function DesktopCard() {
	const [startDate, setStartDate] = React.useState(new Date());
	const [endDate, setEndDate] = React.useState(new Date());
	const [startCalendar, setStartCalendarOpen] = React.useState(false);
	const [returnCalendar, setReturnCalendarOpen] = React.useState(false);
	const [destination, setDestination] = React.useState("");

	const onStartClick = () => {
		if (returnCalendar) {
			setStartCalendarOpen(!startCalendar);
			setReturnCalendarOpen(false);
		} else {
			setStartCalendarOpen(!startCalendar);
		}
	}

	const onEndClick = () => {
		if (startCalendar) {
			setReturnCalendarOpen(!returnCalendar);
			setStartCalendarOpen(false);
		} else {
			setReturnCalendarOpen(!returnCalendar);
		}
	}

	return (
		<div className='booking-card' id='booking-card'>
			<div className="container-left">
				<div className="destination-container">
					<span className='calendar-icon'><FontAwesomeIcon icon={faEarthAmerica} /></span>
					<input
						type="text" 
						placeholder='Destination' 
						value={destination} 
						onChange={e => setDestination(e.target.value)} className="destination" />
				</div>
				<div className="item-container">
					<span className='calendar-icon'><FontAwesomeIcon icon={faCalendarAlt} /></span>
					<span className="start-date" onClick={onStartClick}>Depart</span>
					<div className="start-calendar">
						{startCalendar && <Calendar value={startDate} onChange={setStartDate} />}
					</div>
				</div>
				<div className="item-container">
					<span className='calendar-icon'><FontAwesomeIcon icon={faCalendarAlt} /></span>
					<span className="end-date" onClick={onEndClick} >Return</span>
					<div className="end-calendar">
						{returnCalendar && <Calendar value={endDate} onChange={setEndDate} />}
					</div>
				</div>
			</div>
			<div className='container-right'>
				<BookingButton />
			</div>
		</div>
	)
}

