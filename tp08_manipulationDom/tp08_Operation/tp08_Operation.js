function operation() {
  const champ1 = document.getElementById("nombre").value;
  const champ2 = document.getElementById("nombre2").value;
  const operateur = document.getElementById("select").value;
  const affichage = document.getElementById("resultat");

  const nombre1 = parseFloat(champ1);
  const nombre2 = parseFloat(champ2);

  if (isNaN(nombre1) || isNaN(nombre2)) {
    affichage.style.backgroundColor = "red";
    affichage.textContent = "Vous devez entrer deux chiffres valides.";
    return;
  }

  let resultat;
  let texte;

  switch (operateur) {
    case "+":
      resultat = nombre1 + nombre2;
      texte = `Le résultat de l’addition est : ${resultat}`;
      break;
    case "-":
      resultat = nombre1 - nombre2;
      texte = `Le résultat de la soustraction est : ${resultat}`;
      break;
    case "*":
      resultat = nombre1 * nombre2;
      texte = `Le résultat de la multiplication est : ${resultat}`;
      break;
    case "/":
      if (nombre2 === 0) {
        affichage.style.backgroundColor = "red";
        affichage.textContent = "Division par zéro impossible.";
        return;
      }
      resultat = nombre1 / nombre2;
      texte = `Le résultat de la division est : ${resultat}`;
      break;
    default:
      texte = "Opérateur non reconnu.";
  }

  affichage.style.backgroundColor = "transparent";
  affichage.textContent = texte;
}
