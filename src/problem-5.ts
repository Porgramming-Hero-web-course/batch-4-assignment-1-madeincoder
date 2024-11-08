{
// Problem 5 

type Person = {
    name: string;
    age: number;
}
function getProperty<T, K extends keyof T>(person: T , property : K): T[K] {
    return person[property];
}

const person: Person = { name: "Alice", age: 30 };
const name = getProperty(person, 'name');
console.log(name);





//
}