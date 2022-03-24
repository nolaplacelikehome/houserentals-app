import React from 'react';
import "../../../dist/css/HomePage/HomePage.css";
import BookingCard from '../../components/BookingCard';
import Footer from '../../components/Footer';
import NavBar from '../../components/Navbar';
import FirstSection from './FirstSection';
import HousesList from './HousesList';

export default function HomePage() {
  return(
    <div className='page-container'>
      <NavBar />
      <FirstSection />    
      <BookingCard />
      <HousesList />
      <Footer />
    </div>
  );
}