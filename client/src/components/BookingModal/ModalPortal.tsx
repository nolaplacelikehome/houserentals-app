import React, { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom';
import ModalContainerElement from './ModalContainerElement';

type ModalTypes = {
	children: React.ReactNode,
	wrapperId: string
};

export default function ModalPortal({ children, wrapperId='portal-wrapper' }: ModalTypes) {
	const [wrapperElement, setWrapperElement] = useState<null | Element>(null);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let systemCreated = false;

		if (!element) {
			systemCreated = true;
			element = ModalContainerElement(wrapperId);
		}	
		setWrapperElement(element);

		// Clean up the node
		return () => {
			if (element !== null && systemCreated && element.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]); 	
	
	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
}
