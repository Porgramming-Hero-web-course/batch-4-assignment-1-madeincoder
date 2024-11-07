{
// problem-3 - Here I was going to write a function that takes in a sentence and a word and count the number of occurrences of a word in a sentence

const countWordOccurrences = (sentence: string, word: string): number => {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const wordCount = lowerCaseSentence.split(lowerCaseWord).length - 1;
    return wordCount;
}

const sentence = "TypeScript is great. I love TypeScript!";
const word = "typescript";
const wordCount = countWordOccurrences(sentence, word);
console.log(wordCount);  

//
}