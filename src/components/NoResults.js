import React from "react";
// import {CSSTransition} from 'react-transition-group';

function NoResults() {
	const nodeRef = React.createRef()
	return (
		<div id="no-data" ref={nodeRef}><h1>No Results for this query :(</h1></div>
	)
}

export default NoResults;