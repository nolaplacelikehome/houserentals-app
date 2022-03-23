import React from 'react';
import BookingCard from '../../components/BookingCard';
import NavBar from '../../components/Navbar';
import FirstSection from './FirstSection';
import "../../../dist/css/HomePage/HomePage.css";

export default function HomePage() {
  return(
    <div className='page-container'>
      <NavBar />
      <FirstSection />    
      <BookingCard />
    </div>
  );
}