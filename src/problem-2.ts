{
// Problem 2 - remove duplicates from an array and return it as a new array
const removeDuplicates = (array: number[]): number[] => {
    const uniqueArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
};

const numbers: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9, 10];
const uniqueArray: number[] = removeDuplicates(numbers);
console.log(uniqueArray);


}