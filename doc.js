// Calcul de la somme des entiers de 1 à n
let n = 10; // Déclaration de la variable n avec la valeur 10
let somme = 0; // Initialisation de la variable somme à 0
for (let i = 1; i <= n; i++) {
  somme += i; // Ajout de chaque entier de 1 à n à la variable somme
}
console.log("Somme de 1 à", n, ":", somme); // Affichage du résultat de la somme

// Affichage des 10 nombres suivants à partir de n = 5
n = 5; // Réaffectation de la valeur 5 à la variable n
for (let i = 1; i <= 10; i++) {
  console.log(n + i); // Affichage des nombres de 6 à 15
}

// Affichage des éléments d’un tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]; // Déclaration d’un tableau contenant des entiers
console.log("Afficher normal :");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // Affichage de chaque élément du tableau dans l’ordre d’origine
}

// Copie inversée du tableau
let arrayCopy = [...array]; // Copie superficielle du tableau original (non utilisée ici)
arrayCopy = []; // Réinitialisation de arrayCopy en tableau vide
for (let i = array.length - 1; i >= 0; i--) {
  arrayCopy.push(array[i]); // Ajout des éléments du tableau original en partant de la fin
}
console.log("Original :", array); // Affichage du tableau original
console.log("Console inversée :", arrayCopy); // Affichage du tableau inversé
