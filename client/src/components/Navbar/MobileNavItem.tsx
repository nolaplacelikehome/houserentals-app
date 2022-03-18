import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

let variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

type ItemProps = {
  path: string,
  name: string,
}

export default function MenuNavItem({ path, name }: ItemProps) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      <Link to={path}>{name}</Link>
    </motion.li>
  );
}