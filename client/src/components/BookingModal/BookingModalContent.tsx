import React from 'react'
import '../../../dist/css/BookingModal/BookingModalContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function BookingModalContent({ closeModal }: () => void) {
	const [currentValue, changeValue] = React.useState("");

	return (
		<div className='modal-search'>
			<FontAwesomeIcon onClick={closeModal} icon={faAngleLeft} />
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
