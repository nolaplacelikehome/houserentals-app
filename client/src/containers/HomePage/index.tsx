import React from 'react';
import BookingCard from '../../components/BookingCard';
import NavBar from '../../components/Navbar';
import FirstSection from './FirstSection';

export default function HomePage() {
  return(
    <>
      <NavBar />
      <FirstSection />    
      <BookingCard />
    </>
  );
}