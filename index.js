const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const upperCaseTutorials = tutorials.map(element => {
    const words = element.split(' ');
    const upperCaseEachWord = words.map(word => word[0].toUpperCase() + word.slice(1));
    const sentences = upperCaseEachWord.join(' ');
    return sentences;
  });
  return upperCaseTutorials;
}
