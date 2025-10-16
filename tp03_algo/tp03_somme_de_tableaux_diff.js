let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let somme = [];

for (let i = 0; i < array1.length; i++) {
    let val2 = array2[i] !== undefined ? array2[i] : 0;
    somme.push(array1[i] + val2);
}

console.log(somme);
