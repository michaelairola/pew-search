import React from "react";
import cx from "classnames";
import {CSSTransition} from 'react-transition-group';
import { fmtText } from '../util.js';
import "./SearchResult.css";
function SearchResult({ question, isFetching }) {
	const fmtTxt = fmtText(question.questionText)
	const nodeRef= React.createRef()
	return (
		<CSSTransition 
			in={!isFetching}
			nodeRef={nodeRef}
			timeout={500}
			classNames="fade"
			appear
		>
		<div className={cx("search-result", { "testing": fmtTxt.testing })} ref={nodeRef}>
		  <div>{fmtTxt.question}</div>
		  {fmtTxt.choices ? ( 
		    <ol>{fmtTxt.choices.map((c,j) => <li key={j}>{c}</li>)}</ol> 
		  ) : ""}
		</div>
		</CSSTransition>
	)  
}

export default SearchResult;