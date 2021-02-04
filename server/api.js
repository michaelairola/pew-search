const axios = require("axios");
const querystring = require("querystring");

const pewResearchUrl = "https://www.pewresearch.org/question-search/"
const searchApiUrl = "https://api.roper.center/api/partnersearch"
const getQuestionUrl = (sid, id) => `https://api.roper.center/api/studies/${sid}/questions/${id}?s=1`
// 9adf6f55-fda6-4478-878e-51570f2a1878/questions/3cbe1880-d763-42aa-826e-006f0ba19b3d?s=1"
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
const getQuestion = async (authorization, sid, id) => {
	const res = await axios(getQuestionUrl(sid,id), { headers: { authorization } })
	return res.data
}

module.exports = { getApiKey, search, getQuestion }