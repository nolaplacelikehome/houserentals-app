import React from 'react';
import "../../../dist/css/HomePage/HomePage.css";
import BookingCard from '../../components/BookingCard';
import Footer from '../../components/Footer';
import NavBar from '../../components/Navbar';
import FirstSection from './FirstSection';
import HousesList from './HousesList';

type HandleClose = () => void;
type State = boolean;

export const ModalContext = React.createContext<{isOpen: State, handleClose: HandleClose} | undefined>(undefined);

export default function HomePage() {
  const [isOpen, setIsOpen] = React.useState(false);

  const modalState = {
		isOpen,
		handleClose: () => setIsOpen(!isOpen),
	};

  return(
    <div className='page-container'>
      <NavBar />
      <ModalContext.Provider value={modalState}>
        <FirstSection />    
        <BookingCard />
        <HousesList />
      </ModalContext.Provider>
      <Footer />
    </div>
  );
}