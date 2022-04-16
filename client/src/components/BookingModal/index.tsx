import React, { useLayoutEffect } from 'react'
import "../../../dist/css/BookingModal/Modal.css";
import ModalPortal from './ModalPortal';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

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

type ModalProps = {
	children: React.ReactNode,
	isOpen: boolean,
	handleClose: () => void,
}

export default function Modal({ children, isOpen, handleClose }: ModalProps) {
	if (!isOpen) return null;

	const isDesktop = useMediaQuery({
    query: '(min-width: 1200px)'
  })

	useLayoutEffect(() => {
		const modalCardElement = document.getElementById('modal-card') as HTMLElement;
		console.log(modalCardElement);
		
		const clickOff = (e: MouseEvent) => e.target !== modalCardElement ? handleClose() : null;
		const tapOff = (e: TouchEvent) => e.target !== modalCardElement ? handleClose() : null;
		
		if (isDesktop) {
			document.body.addEventListener("click", clickOff);
		} else {
			document.body.addEventListener("touchstart", tapOff);
		}
		return () => {
			isDesktop ? document.body.removeEventListener("click", clickOff) : document.body.removeEventListener("touchstart", tapOff);
		}
	}, [handleClose]);

	return (
		<ModalPortal wrapperId='portal-wrapper'>
				<div className="modal">
					<motion.div className="modal-card" id="modal-card"
						initial="closed"
						animate="open"
						variants={modalVariant}
					>
						{React.cloneElement(children as React.ReactElement, { closeModal: handleClose })}
					</motion.div>
				</div>
		</ModalPortal>
	);
}
