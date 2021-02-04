import "./SearchBar.css";

function SearchBar({ query, onChange, apiKey, setState }) {
	const search = (q) => {
	  setState({ isFetching: true })
	  fetch(`/api/search?q=${q}`, { headers: { authorization: `Bearer ${apiKey}`}}).then(res => res.json()).then(({ data, error }) => {
	    if(error) return console.log(error);
	    setState({ data: data.data, isFetching: false })
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
		        <button type="submit">
		          <div id="s-circle"></div>
		          <span></span>
		        </button>
		      </div>
		    </div>
		</div>	
	)
}

export default SearchBar