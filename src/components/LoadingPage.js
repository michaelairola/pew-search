import React from "react";
import {CSSTransition} from 'react-transition-group';

function LoadingPage({ apiKey }) {
	const nodeRef = React.createRef()
	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={!apiKey}
			timeout={500}
			classNames="fade"
			appear
		>
		<div id="loading-page" ref={nodeRef}><h1>Loading Api key...</h1></div>
		</CSSTransition>
	)
}

export default LoadingPage;