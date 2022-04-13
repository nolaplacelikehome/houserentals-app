import React, { useEffect } from 'react'
import "../../../dist/css/BookingModal/Modal.css";
import ModalPortal from './ModalPortal';
import { motion } from 'framer-motion';

type ModalProps = {
	children: React.ReactNode,
	isOpen: boolean,
	handleClose: () => void,
}

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

export default function Modal({ children, isOpen, handleClose }: ModalProps) {
	if (!isOpen) return null;

	useEffect(() => {
		const clickOff = (e: TouchEvent) => e.target === window ? handleClose() : null;
		document.body.addEventListener("touchstart", clickOff);
		return () => {
			document.body.removeEventListener("touchstart", clickOff);
		}
	}, [handleClose]);

	return (
		<ModalPortal wrapperId='portal-wrapper'>
				<div className="modal">
					<motion.div className="modal-card"
						initial="closed"
						animate="open"
						variants={modalVariant}
					>
						{React.cloneElement(children as React.ReactElement<any>, {closeModal:{handleClose}})}
					</motion.div>
				</div>
		</ModalPortal>
	);
}
