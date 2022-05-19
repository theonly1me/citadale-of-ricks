import React from 'react';
import ReactDOM from 'react-dom';
// types
import { ModalProps } from '../types';
// styles
import classes from './Modal.module.css';

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<>
			<div onClick={onClose} className={classes.overlay} />
			<div className={classes.modal}>{children}</div>
		</>,
		document.querySelector('#portal') as HTMLInputElement
	);
};

export default Modal;
