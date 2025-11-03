// Variable globale pour stocker les données des pays
var paysData = [];

// Variable pour suivre l'état du tri : "asc" (croissant), "desc" (décroissant), ou "none" (pas de tri)
var triEtat = "none";

// Fonction exécutée automatiquement quand la page est complètement chargée
window.onload = function() {
  // Requête HTTP pour récupérer les données des pays depuis l'API REST Countries
  fetch("https://restcountries.com/v2/all?fields=name,capital,population,region")
    .then(function(rep) {
      // Convertit la réponse en JSON (tableau d'objets pays)
      return rep.json();
    })
    .then(function(donnees) {
      // Stocke les données dans la variable globale
      paysData = donnees;

      // Affiche les données dans le tableau HTML
      afficherTableau(paysData);
    });

  // Récupère le bouton de tri par population
  var boutonTri = document.getElementById("triPopulation");

  // Ajoute un écouteur d'événement au clic sur le bouton
  boutonTri.addEventListener("click", function() {
    // Si le tri est désactivé ou en ordre décroissant, on passe à croissant
    if (triEtat === "none" || triEtat === "desc") {
      triEtat = "asc";

      // Trie les pays par population croissante
      paysData.sort(function(a, b) {
        return a.population - b.population;
      });
    } else {
      // Sinon, on passe à décroissant
      triEtat = "desc";

      // Trie les pays par population décroissante
      paysData.sort(function(a, b) {
        return b.population - a.population;
      });
    }

    // Réaffiche le tableau avec les données triées
    afficherTableau(paysData);

    // Met à jour l'icône du bouton pour refléter le sens du tri
    changerIcone();
  });
};

// Fonction pour afficher les données dans le tableau HTML
function afficherTableau(data) {
  // Récupère le corps du tableau (élément <tbody>)
  var tbody = document.getElementById("contenu");

  // Vide le tableau avant de le remplir
  tbody.innerHTML = "";

  // Boucle sur chaque pays dans les données
  for (var i = 0; i < data.length; i++) {
    var pays = data[i];

    // Crée une nouvelle ligne pour le tableau
    var ligne = document.createElement("tr");

    // Remplit la ligne avec les données du pays
    ligne.innerHTML = "<td>" + pays.name + "</td>" +
      "<td>" + (pays.capital || "N/A") + "</td>" + // Si pas de capitale, affiche "N/A"
      "<td>" + pays.population + "</td>" +
      "<td>" + (pays.region || "N/A") + "</td>"; // Si pas de région, affiche "N/A"

    // Ajoute la ligne au tableau
    tbody.appendChild(ligne);
  }
}

// Fonction pour changer l'icône du bouton de tri
function changerIcone() {
  // Récupère l'élément <index.php> à l'intérieur du bouton
  var icone = document.querySelector("#triPopulation index.php");

  // Réinitialise la classe de base
  icone.className = "fas";

  // Ajoute la classe correspondant à l'état du tri
  if (triEtat === "asc") {
    icone.classList.add("fa-sort-up"); // Flèche vers le haut
  } else if (triEtat === "desc") {
    icone.classList.add("fa-sort-down"); // Flèche vers le bas
  } else {
    icone.classList.add("fa-sort"); // Icône neutre
  }
}
