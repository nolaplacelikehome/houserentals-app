import React from 'react'
import '../../../dist/css/BookingModal/BookingModalContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { ModalContext } from '../../containers/HomePage';

type BookingModalProps = {
	handleClose: () => void,
}

const properties = [
	{
		name: "home1",
		key: "1"
	},
	{
		name: "home2",
		key: "2"
	},
	{
		name: "home3",
		key: "3"
	},
];

export default function BookingModalContent() {
	const modalContext = React.useContext(ModalContext);

	const [currentValue, changeValue] = React.useState("");

	const handleClick = () => {
		if (modalContext) {
			return modalContext.handleClose();
		} else {
			return new Error("Callback method is undefined");
		}
	}

	return (
		<>
			<div className='top-modal'>
				<div className="back-icon" onClick={handleClick}>
					<FontAwesomeIcon icon={faAngleLeft} size="lg" />
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
			<div className="properties-list">
				<ul>
					{properties.map((property) => 
						<li key={property.key}>{property.name}</li>
					)}
				</ul>
			</div>
		</>
	)
}
