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

	const isTablet = useMediaQuery({
    query: '(min-width: 576px)'
  })

	useEffect(() => {
		const clickOff = (e: MouseEvent) => e.target !== modalCardRef.current ? modalContext?.handleClose() : null;
		const tapOff = (e: TouchEvent) => e.target !== modalCardRef.current ? modalContext?.handleClose() : null;
		
		if (isTablet) {
			document.body.addEventListener("click", clickOff);
		} else {
			document.body.addEventListener("touchstart", tapOff);
		}
		return () => {
			isTablet ? document.body.removeEventListener("click", clickOff) : document.body.removeEventListener("touchstart", tapOff);
		}
	}, [modalContext?.handleClose]);

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
						{React.cloneElement(children as React.ReactElement, { closeModal: modalContext.handleClose })}
					</motion.div>
				</div>
		</ModalPortal>
	);
}
