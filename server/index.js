var express = require('express');
const path = require('path');
const { getApiKey, search, getQuestion } = require('./api.js');

const app = express();
const PORT = process.env.PORT || 3001;
const ENV = process.env.ENV || "DEVELOPMENT"
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
app.get("/api/question", (req, res) => {
	const { authorization } = req.headers;
	if(!authorization) return res.json({ error: "No Auth token!" })
	const { sid, id } = req.query;
	return getQuestion(authorization, sid, id).then(
		data => res.json({ data }),
		err => res.json({ error })
	)
})

if(ENV==="PRODUCTION"){
	const build_path = path.join(__dirname, "../build");
	app.use(express.static(build_path));
	app.get("/", (req, res) => {
	 res.sendFile(path.join(build_path, "index.html"));
	});
}

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
