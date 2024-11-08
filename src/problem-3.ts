{
// problem-3

const countWordOccurrences = (sentence: string, word: string): number => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const wordCount = sentence.split(regex).length - 1;
    return wordCount;
}

const sentence = "I love typescript. So, I want to learn typescript properly.";
const word = "typescript";
const wordCount = countWordOccurrences(sentence, word);
console.log(wordCount);  


//
}