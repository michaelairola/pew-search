// import { useState, useEffect } from "react";
import { fmtText } from '../util.js';

function SearchResult({ question }) {
	const fmtTxt = fmtText(question.questionText)
	return (
		<div className={fmtTxt.testing ? 'search-result testing' : 'search-result'}>
		  <div>{fmtTxt.question}</div>
		  {fmtTxt.choices ? ( 
		    <ol>{fmtTxt.choices.map((c,j) => <li key={j}>{c}</li>)}</ol> 
		  ) : ""}
		</div>
	)  
}

export default SearchResult;