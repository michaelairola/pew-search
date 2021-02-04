export const fmtText = txt => {
  let question = txt.replace("(", "").replace(")", "");
  let choices, testing;
  const checkForQuestion = question.match(/(.*)\?\.{3}(.*)/) 
  
  if(checkForQuestion) {
    question = checkForQuestion[1];
    let tmpChoices = checkForQuestion[2];
    if(tmpChoices.match(",")) {
      choices = tmpChoices.split(/(?<!(Yes|yes|No|no)),/g)
      if(choices[0].match(/\.{3,}/)) {
        const matches = choices[0].match(/(.*?)\.{3,}(.*)/)
        testing = true;
        let m = matchEachPhrases(question, matches[1])
        if(m.match) question = m.question
        else question += ": " + matches[1]
        choices[0] = matches[2]
      }
      choices = choices.filter(x => x)
    } else {
      let choice = checkForQuestion[2]
      testing = true;
      question = matchEachPhrases(question, choice).question
    }
    question += "?";
  } else if (question.match(/\.{3,}/)) {
  }
  return { question, choices, testing }
}


const matchEachPhrases = (question, choice) => {
  const eachKeyPhrases = [ 'each of the following' ];
  for(let i = 0; i < eachKeyPhrases.length; i++) {
    let phrase = eachKeyPhrases[i];
    if(question.match(phrase)){
      return { match: true, question: question.replace(phrase, choice) }
    }
  }
  return { match: false, question };
}
