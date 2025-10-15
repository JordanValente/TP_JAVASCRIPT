let n = 10;
let somme = 0;
for (let i = 1; i <= n; i++) {
  somme += i;
}
console.log("Somme de 1 à", n, ":", somme);

n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n + i);
}

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Afficher normal :");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
let arrayCopy = [...array];

arrayCopy = [];
for (let i = array.length - 1; i >= 0; i--) {
  arrayCopy.push(array[i]);
}
console.log("Original :", array);
console.log("Console inversée :", arrayCopy);
