function verifierFormulaire() {
  const Nom = document.getElementById("nom").value.trim();
  const Prenom = document.getElementById("prenom").value.trim();
  const Date = document.getElementById("dateNaissance").value.trim();
  const erreur = document.getElementById("erreur");

  const formulaireIncomplet = Nom === "" || Prenom === "" || Date === "";

  if (formulaireIncomplet) {
    erreur.style.display = "block";
    erreur.textContent = "Tous les champs doivent être remplis.";
    return false;
  }

  erreur.style.display = "none";
  return true;
}
