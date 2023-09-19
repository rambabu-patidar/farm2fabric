import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return (
		<div
			className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75"
			onClick={props.onClose}
		></div>
	);
};

const ModalOverlay = (props) => {
	return (
		<div className="absolute top-[42rem] left-48 w-90 bg-white p-4 rounded-lg shadow-md z-30 animate-slide-down">
			<div>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;
