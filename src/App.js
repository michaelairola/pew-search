import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';
import { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setNewState] = useState({ isFetching: false })
  const setState = updatedState => setNewState({ ...state, ...updatedState })
  const { apiKey, data, query, isFetching } = state;
  useEffect(() => {
        if(!apiKey) fetch("/api/key").then(res => res.json()).then(({ apiKey, error }) => 
          error ? console.log(error) : setState({ apiKey })
        )
    })
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
        {isFetching ? <div id="loading-data"> Loading data...</div> : data ? 
          data.results.map((question, i) => <SearchResult key={i} question={question} /> )
         : ""}
      </header>
    </div>
  );
}

export default App;
