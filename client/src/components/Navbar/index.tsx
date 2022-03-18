import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useMediaQuery } from 'react-responsive';

export default function NavBar() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 576px)'
  });
  
  return (
    <>
      {
      isDesktop ?
      <DesktopNav /> :
      <MobileNav />
      }
    </>
  );
}

