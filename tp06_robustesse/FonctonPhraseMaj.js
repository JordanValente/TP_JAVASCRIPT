function PhraseMaj(phrase) {
  if (typeof phrase !== "string")
    throw {error: phrase !== "string"};
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
  if (typeof texte !== "string")
    throw {error: texte !== "string"};
  return somme;
}
//console.log(PhraseMaj("une grenouille mange des olives"));
console.log(PhraseMaj(250));
