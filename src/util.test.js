import { fmtText } from "./util.js"

const questionTextFmtMap = {
// TODO get rid of ... in question
	"As you may know, there has been a lot of attention paid to issues related to race and racial inequality in our country in the past three months, sparked by the death of George Floyd, a Black man who was killed by a white police officer in Minneapolis....Do you think the increased focus on issues of race and racial inequality in our country in the past three months represents a change in the way most Americans think about these issues?...Yes, a major change, yes, a minor change, no, not a change": {
		question: "As you may know, there has been a lot of attention paid to issues related to race and racial inequality in our country in the past three months, sparked by the death of George Floyd, a Black man who was killed by a white police officer in Minneapolis....Do you think the increased focus on issues of race and racial inequality in our country in the past three months represents a change in the way most Americans think about these issues?",
		choices: [ "Yes, a major change", "yes, a minor change", "no, not a change", ]
	},
	"util.js:3 Now thinking about all of the US presidents during your lifetime, which one has done the best job as president?": {
		question: "util.js:3 Now thinking about all of the US presidents during your lifetime, which one has done the best job as president?",
	},
	"And which president, if any, would you name second (as having done the best job in your lifetime)?": {
		question: "And which president, if any, would you name second as having done the best job in your lifetime?",
	},
	"Thinking about the 2016 presidential election, who would be your choice for the Republican nomination for president?...Donald Trump, Ted Cruz, John Kasich, Ben Carson, Marco, Rubio, Rand Paul, Jeb Bush, other": {
		question: "Thinking about the 2016 presidential election, who would be your choice for the Republican nomination for president?",
		choices: [ "Donald Trump", "Ted Cruz", "John Kasich", "Ben Carson", "Marco", "Rubio", "Rand Paul", "Jeb Bush", "other", ], 
	},
	// TODO remove ... from question
	"And is your overall opinion of...Jeb Bush very favorable, mostly favorable, mostly unfavorable, or very unfavorable?": {
		question: "And is your overall opinion of...Jeb Bush very favorable, mostly favorable, mostly unfavorable, or very unfavorable?",
	}

}

test('formats question text properly', () => {  
  Object.keys(questionTextFmtMap).forEach(k => {
	  const exp = questionTextFmtMap[k];
	  const act = fmtText(k);
	  expect(act.question).toBe(exp.question);
	  
	  if(exp.choices) exp.choices.forEach((choice,i) => {
	  	expect(act.choices[i]).toBe(choice)
	  })
  })
});


