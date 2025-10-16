let array = [0, 1, 2, 3];
let rotated = [array[array.length - 1], ...array.slice(0, array.length - 1)];
console.log(rotated);
