// pull the array of common-words.js here so that the var randomIndex can
// function properly.
// console.log(commonWords);
// var randomIndex = Math.floor(Math.random() * length);
// commonWords[randomIndex];
// console.log([randomIndex]);

var randWordList = commonWords[Math.floor(Math.random() * commonWords.length)];

function theWord(){
 return randWordList;
};

console.log(randWordList);
