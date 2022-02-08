import React, { useState, useEffect } from "react";
import cx from "classnames";
import {CSSTransition} from 'react-transition-group';
import { fmtText } from '../util.js';
import "./SearchResult.css";
import { Bar } from 'react-chartjs-2';

function SearchResult({ question, apiKey, isFetching }) {
	const fmtTxt = fmtText(question.questionText)
	const nodeRef= React.createRef()
	const [ open, setOpen ] = useState(false)
	const [ q, setQ ] = useState()

	useEffect(() => {
		if(open && !q) {
			const { sid, id } = question
			fetch(`/api/question?sid=${sid}&id=${id}`, { headers: { authorization: `Bearer ${apiKey}`}} ).then(res => res.json()).then(({ data }) => {
				setQ(data)
			})
		}
	})
	let labels = ["","","","",""], data = [];
	if(q) {
		const fmtQ = q.responses.map(res => ({ key: res.displayText.value, value: res.percentage }))
		labels = fmtQ.map(({ key }) => key);
		data = fmtQ.map(({ value }) => value);
	}
	return (
		<CSSTransition 
			in={!isFetching}
			nodeRef={nodeRef}
			timeout={500}
			classNames="fade"
			appear
		>
		<div
			className={cx("search-result", { "testing": fmtTxt.testing })} 
			ref={nodeRef}
		>
			<div id="result-summary">
				<div id="result-question">
					<div>{fmtTxt.question}</div>
					  {fmtTxt.choices ? ( 
					    <ol>{fmtTxt.choices.map((c,j) => <li key={j}>{c}</li>)}</ol> 
					  ) : ""}
				</div>
				<button onClick={() => setOpen(!open)}><i className={open ? "arrow down" : "arrow up"}></i></button>
			</div>
			{ open && <Bar data={{
				      labels, 
				      datasets: [{ 
				        label: "percent", 
				        data,
				        backgroundColor: "#FF6384",
				      }],
				    }}/>
			}
		</div>
		</CSSTransition>
	)  
}

export default SearchResult;