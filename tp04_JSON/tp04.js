let societe = {
  "Nom": "Google",
  siegeSocial: {"adresse":"Googleplex", "ville":"Mountain", "etats":"California","pays":"United States"},
  "fondateurs": [
    {nom: "Larry Page", naissance: "26/03/1973", lieu: "East Lansing, Michigan"},
    {nom: "Sergey Brin", naissance: "21/08/1973", lieu: "Moscou, Union Soviétique"}
  ],
  Chiffredaffaire: {
    "2008": 16.49,
    "2012": 37.97,
    "2016": 89.46,
    "2018": 136.2
  }
};
console.log("=== Fondateurs ===");
for (let i = 0; i < societe.fondateurs.length; i++) {
  const fondateur = societe.fondateurs[i];
  console.log(" - " + fondateur.nom + ", né le " + fondateur.naissance + " à " + fondateur.lieu);
}

console.log("=== Chiffres d'affaires (en milliards de $) ===");
for (let annee in societe.Chiffredaffaire) {
  console.log(" - " + annee + " : " + societe.Chiffredaffaire[annee] + " milliards $");
}
