import React from "react";
// import {CSSTransition} from 'react-transition-group';

function InvalidQuery() {
	const nodeRef = React.createRef()
	return (
		<div id="no-data" ref={nodeRef}><h1>Invalid Query :(. Please try another query.</h1></div>
	)
}

export default InvalidQuery;