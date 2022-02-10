import logo from './logo.svg';
import './App.css';
import React from "react";

import SearchBar from './components/SearchBar.js';
import LoadingData from './components/LoadingData.js';
import NoResults from './components/NoResults.js';
import InvalidQuery from './components/InvalidQuery.js';
import LoadingPage from './components/LoadingPage.js';
import SearchResult from './components/SearchResult.js';
import { useState, useEffect } from "react";
import {CSSTransition} from 'react-transition-group';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setNewState] = useState({ isFetching: false, invalidQuery: false })
  const setState = updatedState => setNewState({ ...state, ...updatedState })
  
  const { apiKey, data, query, isFetching, invalidQuery } = state;
  useEffect(() => {
        if(!apiKey) fetch("/api/key").then(res => res.json()).then(({ apiKey, error }) => 
          error ? console.log(error) : setState({ apiKey })
        )
    })
  const nodeRef=React.createRef()
  // if(data) 
    // console.log( InvalidQuery)
  return (
    <div className="App">
      <header className="App-header">
        {!apiKey && <LoadingPage apiKey={apiKey}/> }
        { (
          apiKey && <CSSTransition
            nodeRef={nodeRef}
            in={!!apiKey}
            timeout={500}
            classNames="fade"
            appear
          ><div ref={nodeRef}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>A smoother UI for the <a target="_blank" href="https://www.pewresearch.org/question-search/">Pew Research Center</a></p>
            <div>
              <SearchBar query={query} setState={setState} apiKey={apiKey}/>
            </div>
          </div></CSSTransition>
        )}
      </header>
        <div style={{ width: "100vw" }}>
          { isFetching && <LoadingData isFetching={isFetching}/> }
          { data && data.results && data.results.map((question, i) => <SearchResult key={i} question={question} isFetching={isFetching} apiKey={apiKey}/> ) }
          { !isFetching && !invalidQuery && data && data.results.length === 0 && <NoResults/> }
          { !isFetching && invalidQuery && <InvalidQuery/>}
        </div>
    </div>
  );
}

export default App;
