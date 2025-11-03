function chargerPaysInfos() {
  // Création d'un objet XMLHttpRequest pour faire une requête HTTP
  const req = new XMLHttpRequest();

  // Préparation de la requête GET vers l'API REST Countries
  // Le paramètre "true" signifie que la requête est asynchrone
  req.open("GET", "https://restcountries.com/v2/all?fields=name,capital,population,region", true);

  // Définition de la fonction à exécuter à chaque changement d'état de la requête
  req.onreadystatechange = function () {
    // readyState === 4 signifie que la requête est terminée
    // status === 200 signifie que la réponse est OK (succès)
    if (req.readyState === 4 && req.status === 200) {
      // Conversion du texte JSON reçu en tableau d'objets JavaScript
      const data = JSON.parse(req.responseText);

      // Récupération du tableau HTML où on va insérer les lignes
      const tbody = document.getElementById("contenu");

      // Boucle sur chaque pays dans les données reçues
      data.forEach(pays => {
        // Création d'une nouvelle ligne pour le tableau
        const ligne = document.createElement("tr");

        // Création de la cellule pour le nom du pays
        const celluleNom = document.createElement("td");
        celluleNom.textContent = pays.name; // Nom du pays
        ligne.appendChild(celluleNom); // Ajout de la cellule à la ligne

        // Création de la cellule pour la capitale
        const celluleCapitale = document.createElement("td");
        // Si la capitale est absente, on affiche "N/A"
        celluleCapitale.textContent = pays.capital || "N/A";
        ligne.appendChild(celluleCapitale);

        // Création de la cellule pour la population
        const cellulePopulation = document.createElement("td");
        // Formatage du nombre avec des séparateurs de milliers
        cellulePopulation.textContent = pays.population.toLocaleString();
        ligne.appendChild(cellulePopulation);

        // Création de la cellule pour la région
        const celluleRegion = document.createElement("td");
        // Si la région est absente, on affiche "N/A"
        celluleRegion.textContent = pays.region || "N/A";
        ligne.appendChild(celluleRegion);

        // Ajout de la ligne complète au tableau HTML
        tbody.appendChild(ligne);
      });
    }
  };

  // Envoi de la requête vers le serveur
  req.send();
}
