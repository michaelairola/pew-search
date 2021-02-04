import React from "react";
import SearchResult from "./SearchResult.js";
import {CSSTransition} from 'react-transition-group';

function SearchResults({ results }) {
	const nodeRef = React.useRef(null);
	return (
		<CSSTransition 
		  	nodeRef={nodeRef}
			timeout={1000}
			classNames="display"
			appear
		>
		<div className="search-results" ref={nodeRef}>{results && results.map((question, i) => <SearchResult key={i} question={question} /> )}</div>
		</CSSTransition>
	)
}

export default SearchResults;