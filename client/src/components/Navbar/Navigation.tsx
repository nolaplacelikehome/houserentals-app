import React from 'react';
import { motion } from 'framer-motion';
import MobileNavItem from './MobileNavItem';
import { MenuItems } from './MenuItems';

let variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: -1 }
  }
};

export default function Navigation() {
  return(
    <motion.ul variants={variants}>
      {MenuItems.map(item =>
        <MobileNavItem path={item.url} key={item.id} name={item.name} />
    )}
    </motion.ul>
  );
}