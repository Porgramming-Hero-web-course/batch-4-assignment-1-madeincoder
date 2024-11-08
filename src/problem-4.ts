{
// Problem 4


interface Circle {
    shape: string;
    radius: number;
}

interface Rectangle {
    shape: string;
    length: number;
    width: number;
}

const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if ('radius' in shape) {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.length * shape.width;
    }
}

const circle: Circle = {shape: "circle", radius: 5 };
const rectangle: Rectangle = {shape: "rectangle", length: 4, width: 6 };

const circleArea = calculateShapeArea(circle).toFixed(2);
console.log(circleArea);

const rectangleArea = calculateShapeArea(rectangle);
console.log(rectangleArea);



//
}