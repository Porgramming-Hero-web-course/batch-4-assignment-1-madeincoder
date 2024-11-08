{
// Problem 8

    interface Person {
        name: string;
        age: number;
        email: string;
    }

    const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
        
        for (const key of keys) {
            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    }

    const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };

    console.log(validateKeys(person, ["name", "age"]));
    //console.log(validateKeys(person, ["name", "address"]));



//
}