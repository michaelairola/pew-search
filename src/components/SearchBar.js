import "./SearchBar.css";

function SearchBar({ query, onChange, apiKey, setState }) {
	const search = (q) => {
	  setState({ isFetching: true })
	  fetch(`/api/search?q=${q}`, { headers: { authorization: `Bearer ${apiKey}`}}).then(res => res.json()).then(({ data, error }) => {
	    if(error) {
	    	setState({ data: [], isFetching: false, invalidQuery: true })
	    	// return console.log(error);
	    	return
	    }
	    setState({ data: data.data, isFetching: false, invalidQuery: false })
	  })
	}
	
	return (
		<div id="cover">
		    <div className="tb">
		      <div className="td">
		      	<input 
		      	  type="text" 
		      	  placeholder="Search Pew Research"
		      	  value={query || ""}
		      	  onChange={e => setState({ query: e.target.value })}
		      	  onKeyDown={e => e.key === 'Enter' ? search(query) : undefined}
		      	/>
	      	  </div>
		      <div className="td" id="s-cover">
		        <button onClick={() => search(query)}>
		          <div id="s-circle"></div>
		          <span></span>
		        </button>
		      </div>
		    </div>
		</div>	
	)
}

export default SearchBar