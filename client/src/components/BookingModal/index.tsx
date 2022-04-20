import React, { useEffect } from 'react'
import "../../../dist/css/BookingModal/Modal.css";
import ModalPortal from './ModalPortal';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { ModalContext } from '../../containers/HomePage';

let modalVariant = {
  open: {
		opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
		opacity: 0, 
    y: 50,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

type ModalProp = {
	children: React.ReactNode,
}

export default function Modal({ children }: ModalProp) {
	const modalContext = React.useContext(ModalContext);

	const modalCardRef = React.useRef<HTMLDivElement>(null);

	if (!modalContext?.isOpen) return null;

	return (
		<ModalPortal wrapperId='portal-wrapper'>
				<div className="modal">
					<motion.div className="modal-card"
						initial="closed"
						animate="open"
						variants={modalVariant}
						ref={modalCardRef}
					>
						{children}
					</motion.div>
				</div>
		</ModalPortal>
	);
}
