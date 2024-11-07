{
// Problem 2 - remove duplicates from an array and return it as a new array

const removeDuplicates = (array: number[]): number[] => {
    const newArray: number[] = array.filter((value, index) => array.indexOf(value) === index);
    return newArray;
};

const numbers: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9, 10];
const newArray: number[] = removeDuplicates(numbers);
console.log(newArray);

//
}