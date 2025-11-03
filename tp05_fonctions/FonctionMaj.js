function Maj(texte) {
  let lettre = texte.charAt(0);
  let maj = lettre.toUpperCase();
  let restant = texte.slice(1);
  let somme = maj+restant;
  return somme;
}

console.log(Maj("mat et o"));
