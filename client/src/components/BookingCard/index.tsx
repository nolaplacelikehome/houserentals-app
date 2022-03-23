import React from 'react'
import BookingButton from '../Buttons/BookingButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';	
import 'react-calendar/dist/Calendar.css';

import "../../../dist/css/BookingCard/BookingCard.css";

export default function BookingCard() {
	const [startDate, setStartDate] = React.useState(new Date());
	const [endDate, setEndDate] = React.useState(new Date());
	const [startCalendar, setStartCalendarOpen] = React.useState(false);
	const [returnCalendar, setReturnCalendarOpen] = React.useState(false);

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
		<div className='booking-card'>
			<div className="item-container">
				<span className='calendar-icon'><FontAwesomeIcon icon={faCalendarAlt} /></span>
				<span className="start-date" onClick={onStartClick}>Starting Date</span>
				<div className="start-calendar">
					{startCalendar && <Calendar value={startDate} onChange={setStartDate} />}
				</div>
			</div>
			<div className="vertical-line"></div>
			<div className="item-container">
				<span className='calendar-icon'><FontAwesomeIcon icon={faCalendarAlt} /></span>
				<span className="end-date" onClick={onEndClick} >Return Date</span>
				<div className="end-calendar">
					{returnCalendar && <Calendar value={endDate} onChange={setEndDate} />}
				</div>
			</div>
			<BookingButton />
		</div>
	)
}