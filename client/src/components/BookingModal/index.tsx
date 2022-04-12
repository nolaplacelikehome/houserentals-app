import React, { useEffect } from 'react'
import "../../../dist/css/Modal/Modal.css";
import ModalPortal from './ModalPortal';

type ModalProps = {
	children: React.ReactNode,
	isOpen: boolean,
	handleClose: () => void,
}

export default function Modal({ children, isOpen, handleClose }: ModalProps) {
	if (!isOpen) return null;

	useEffect(() => {
		const clickOff = (e: TouchEvent)  => e.target === window ? handleClose() : null;
		document.body.addEventListener("touchstart", clickOff);
		return () => {
			document.body.removeEventListener("touchstart", clickOff);
		}
	}, [handleClose]);

	return (
		<ModalPortal wrapperId='portal-wrapper'>
			<div className="modal">
				<div className="modal-content">
					{children}
					<button onClick={handleClose}>Close</button>
				</div>
			</div>
		</ModalPortal>
	);
}
