import React from 'react';
import "../../../dist/css/FirstSection/FirstSection.css";
import HomeButtons from '../../components/Buttons/HomeButtons';
import { useMediaQuery } from 'react-responsive';
import Modal from '../../components/BookingModal/';
import frontHome from "../../../assets/front-home.jpg";
import DesktopCard from '../../components/BookingCard/DesktopCard';
import BookingModalContent from '../../components/BookingModal/BookingModalContent';
import { ModalContext } from '../HomePage';

export default function FirstSection() {
	const modalContext = React.useContext(ModalContext);

	const isDesktop = useMediaQuery({
    query: '(min-width: 1200px)'
  })

	const handleClick = () => {
		if (modalContext) {
			return modalContext.handleClose();
		} else {
			return new Error("Callback method is undefined");
		}
	}

	return (
		<div className="first-section-container" id="home">
			<div className="introduction-container">
				<h3>Rent or List your Home</h3>
				<div className="introduction">
					Welcome to home rentals! Whether you're renting or listing a home,
					we're here to help you. 
				</div>
				<HomeButtons onClick={handleClick} />
				<div className='desktop-card'>
					{
						isDesktop ?
						<DesktopCard />
						:
						<Modal>
							<BookingModalContent />
						</Modal>
					}
				</div>
			</div>
			<div className="img-container">
				<img src={frontHome} alt="Image of a home" />
			</div>
		</div>
	)
}