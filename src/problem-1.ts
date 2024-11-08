{
// Problem 1

const sumArray = (array: number[]): number => {
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum: number = sumArray(numbers);
console.log(sum);

//
}