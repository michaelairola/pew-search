const axios = require("axios");
const querystring = require("querystring");

const pewResearchUrl = "https://www.pewresearch.org/question-search/"
const searchApiUrl = "https://api.roper.center/api/partnersearch"
const findApiKeyRegex = /apiKey: \"([a-zA-Z0-9-_\.]*?)\"/

const getApiKey = async () => {
  const res = await axios(pewResearchUrl)
  const matches = res.data.match(findApiKeyRegex)
  const [ _, apiKey ] = matches;
  return apiKey
}

const search = async (queryObj) => {
	const { authorization } = queryObj;
	delete queryObj["authorization"];
	const res = await axios(`${searchApiUrl}?${querystring.stringify(queryObj)}`, { headers: { authorization }})
	return res.data
}

module.exports = { getApiKey, search }