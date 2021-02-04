import React from "react";
import {CSSTransition} from 'react-transition-group';

function LoadingData({ isFetching }) {
	const nodeRef = React.createRef()
	console.log(isFetching)
	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={isFetching}
			timeout={500}
			classNames="fade"
			appear
		>
		<div id="loading-data" ref={nodeRef}><h1>Loading data...</h1></div>
		</CSSTransition>
	)
}

export default LoadingData;