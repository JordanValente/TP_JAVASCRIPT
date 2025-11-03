function ditBonjour(nom) {
  if (typeof nom !== "string") {
    throw `L'élément n'est pas une chaine de caractere`;
  }
  return "Bonjour"+" " + nom;
}
console.log(ditBonjour("Walid"));
