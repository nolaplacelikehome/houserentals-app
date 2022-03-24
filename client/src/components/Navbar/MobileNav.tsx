import React, { MutableRefObject } from 'react';
import { motion, useCycle } from 'framer-motion';
import Navigation from './Navigation';
import MenuToggle from './MenuToggle';
import { useDimensions } from './use-dimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import "../../../dist/css/Navbar/MobileNav.css";

let sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 154.5px 41px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    } 
  },
};

export default function MobileNav() {
  const [sidebarState, sidebarChange] = useCycle(false, true);
  const containerRef = React.useRef() as MutableRefObject<HTMLElement>;
  const { height } = useDimensions(containerRef);

  return (
    <div className="mobile-nav-bar">
      <div className="name-container">
        <div className="nav-logo"><FontAwesomeIcon icon={faHome} color='#CB3B1B' size="lg" /></div>
        <div className="nav-name">Home Rentals</div>
      </div>
      <motion.nav
        initial={false}
        animate={sidebarState ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => sidebarChange()} />
      </motion.nav>
    </div>
  );
}