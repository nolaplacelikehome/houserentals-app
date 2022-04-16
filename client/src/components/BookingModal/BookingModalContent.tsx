import React from 'react'
import '../../../dist/css/BookingModal/BookingModalContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

type BookingModalProps = {
	handleClose: () => void,
}

export default function BookingModalContent({ handleClose }: BookingModalProps) {
	const [currentValue, changeValue] = React.useState("");

	return (
		<div className='modal-search'>
			<div className="back-icon" onClick={handleClose}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</div>
			<input 
				value={currentValue} 
				onChange={e => changeValue(e.target.value)} 
				type="text" 
				name="destination" 
				id="destination" 
				placeholder='Where are you going?'
			/>
		</div>
	)
}
