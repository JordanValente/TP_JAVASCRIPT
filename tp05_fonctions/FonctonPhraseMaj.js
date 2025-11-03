function PhraseMaj(phrase) {
  return phrase
    .split(" ")
    .map(function(mot) {
      return Maj(mot);
    })
    .join(" ");
}
function Maj(texte) {
  let lettre = texte.charAt(0);
  let maj = lettre.toUpperCase();
  let restant = texte.slice(1);
  let somme = maj+restant;
  return somme;
}
console.log(PhraseMaj("une grenouille mange des olives"));
