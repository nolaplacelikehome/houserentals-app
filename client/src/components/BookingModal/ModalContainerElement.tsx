import React from 'react'

export default function ModalContainerElement(wrapperId: string) {
	const wrapperElement = document.createElement('div');
	wrapperElement.setAttribute('id', wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
}
