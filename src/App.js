import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar.js';
import { useState, useEffect } from "react";
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fmtText } from './util.js';
function App() {
  const [state, setNewState] = useState({ isFetching: false })
  const setState = updatedState => setNewState({ ...state, ...updatedState })
  const { apiKey, data, query, isFetching } = state;
  useEffect(() => {
        if(!apiKey) fetch("/api/key").then(res => res.json()).then(({ apiKey, error }) => 
          error ? console.log(error) : setState({ apiKey })
        )
    })
  if(data) console.log("houston we have data!", data)
  return (
    <div className="App">
      <header className="App-header">
        {apiKey ? (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
            <SearchBar query={query} setState={setState} apiKey={apiKey}/>
            </div>
          </>
        ) : <div id="loading-page">Loading Api key...</div>}
        {isFetching ? <div id="loading-data"> Loading data...</div> : data ? (
          <>
            { data.results.map((result, i) => {
              const { question, choices, testing } = fmtText(result.questionText)
              return (
                <div className={testing ? 'search-result testing' : 'search-result'} key={i}>
                  <div>{question}</div>
                  {choices ? ( 
                    <ol>{choices.map((c,j) => <li key={j}>{c}</li>)}</ol> 
                  ) : ""}
                </div>
                )  
            })}
          </>
        ) : ""}
      </header>
    </div>
  );
}

export default App;
