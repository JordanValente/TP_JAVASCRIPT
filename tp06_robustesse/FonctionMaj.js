function Maj(texte) {
  let lettre = texte.charAt(0);
  let maj = lettre.toUpperCase();
  let restant = texte.slice(1);
  let somme = maj+restant;
  if (typeof texte !== "string")
    throw {error: texte !== "string"};
  return somme;
}

//console.log(Maj("mat et o"));
console.log(Maj(25));
