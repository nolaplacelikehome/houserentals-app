import React from 'react';
import "../../../dist/css/FirstSection/FirstSection.css";
import HomeButtons from '../../components/Buttons/HomeButtons';
import { useMediaQuery } from 'react-responsive'
import Modal from '../../components/BookingModal/';
import frontHome from "../../../assets/front-home.jpg";
import DesktopCard from '../../components/BookingCard/DesktopCard';
import BookingModalContent from '../../components/BookingModal/BookingModalContent';

export default function FirstSection() {
	const [isOpen, setIsOpen] = React.useState(false);

	const isDesktop = useMediaQuery({
    query: '(min-width: 1200px)'
  })

	const modalState = {
		isOpen,
		handleClose: () => setIsOpen(false),
	};
	
	return (
		<div className="first-section-container" id="home">
			<div className="introduction-container">
				<h3>Rent or List your Home</h3>
				<div className="introduction">
					Welcome to home rentals! Whether you're renting or listing a home,
					we're here to help you. 
				</div>
				<HomeButtons onClick={() => setIsOpen(!isOpen)} />
				<div className='desktop-card'>
					{
						isDesktop ?
						<DesktopCard />
						:
						<Modal {...modalState} >
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