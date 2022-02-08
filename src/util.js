
export const fmtText = txt => {
  let question = txt.replaceAll(/[()]/g, "");
  return { question }
  // let choices, testing;
  // const checkForSpecialCase = matchSpecialCase(question)
  // const checkForQuestion = question.match(/(.*)\?\.{3}(.*)/)   
  // if(checkForSpecialCase) {
  //   question = checkForSpecialCase.question;
  //   question += "?"
  // } else if(checkForQuestion) {
  //   question = checkForQuestion[1];
  //   let tmpChoices = checkForQuestion[2];
  //   if(tmpChoices.match(",")) {
  //     choices = tmpChoices.split(/(?<!(Yes|yes|No|no)),/g)
  //     if(choices[0].match(/\.{3,}/)) {
  //       const matches = choices[0].match(/(.*?)\.{3,}(.*)/)
  //       let m = matchEachPhrases(question, matches[1])
  //       if(m.match) question = m.question
  //       else question += ": " + matches[1]
  //       choices[0] = matches[2]
  //     }
  //     choices = choices.filter(x => x).map(x => x.startsWith(" ") ? x.replace(" ", "") : x)
  //   } else {
  //     let choice = checkForQuestion[2]
  //     question = matchEachPhrases(question, choice).question
  //   }
  //   question += "?";
  // } else if (question.match(/\.{3,}/)) {
  // }
  // return { question, choices, testing }
}

// const matchSpecialCase = question => {
//   let YesNo = /Here's a list of activities some people do and others do not./
//   let m = question.match(YesNo)
//   if (m) {
//     let qSplit = question.split(/\.{3,}(.*$)/)
//     const quant = question.match(/past year|past month|past 6 months/)
//     question = `Have you in the ${quant} ${qSplit[1]}`
//     return { match: true, question }
//   }
// }

// const matchEachPhrases = (question, choice) => {
//   const eachKeyPhrases = [ 'each of the following' ];
//   for(let i = 0; i < eachKeyPhrases.length; i++) {
//     let phrase = eachKeyPhrases[i];
//     if(question.match(phrase)){
//       return { match: true, question: question.replace(phrase, choice) }
//     }
//   }
//   return { match: false, question };
// }
