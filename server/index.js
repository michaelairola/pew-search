var express = require('express');
const { getApiKey, search } = require('./get-api-key.js');

const app = express();
const PORT = process.env.PORT || 3001;
const error = 'Something went wrong. Please try again in 10-20 minutes.'

app.get("/api/key", (req, res) => 
	getApiKey().then(
		apiKey => res.json({ apiKey }), 
		err => res.json({ error })
	)
)
app.get("/api/search", (req, res) => {
	const { authorization } = req.headers;
	if(!authorization) return res.json({ error: "No Auth token!" })
	const query = req.query;
	
	const order = "desc";
	const perPage = 10;
	const scope = "QUESTION"
	const sort = "interviewStart"
	const q = query.q
	console.log("searching for:", q) 
	return search({ authorization, order, perPage, scope, sort, q }).then(
		data => res.json({ data }),
		err => res.json({ error })
	)
})

app.listen(PORT, () => console.log(`Searving on port ${PORT}`));
